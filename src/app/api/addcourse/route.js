import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Courses from "@/models/Courses";
import { Readable } from "stream";
import { v2 as cloudinary } from 'cloudinary';


export const POST = async (request) => {
    try {
        const CourseData = await request.formData();
        const imageFile = CourseData.get('image');
        const title = CourseData.get('title');
        const description = CourseData.get('description');
        const price = CourseData.get('price');
        const maxUsers = CourseData.get('maxUsers')
        const dateTimeChips = CourseData.get('dateTimeChips')
  
        await connect();
        const meetingDetails = [];
        const dates = JSON.parse(dateTimeChips)
        

        const bytes = await imageFile.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const imagestream = Readable.from(buffer);




        cloudinary.config({
            cloud_name: process.env.CLOUDNAME,
            api_key: process.env.CLOUDAPIKEY,
            api_secret: process.env.CLOUDAPISECRET
        });

        const uploadResponse = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { folder: "bbcourse" },
                (error, result) => {
                    if (result) {
                        resolve(result);
                    } else {
                        reject(error);
                    }
                }
            );
            imagestream.pipe(stream);
        });




        const imageurl = uploadResponse.url


        // Auth for Zoom Api
        try {
            const basicAuth = Buffer.from(`${process.env.ZOOM_CLIENT_ID}:${process.env.ZOOM_CLIENT_SECRET}`).toString('base64');
            const response = await fetch(`https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${process.env.ACCOUNTID}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${basicAuth}`,
                    'Content-Type': 'application/json'
                }
            });
            const res = await response.json()
            const accessToken = res.access_token

            // Generate Meeting Link
            for (let chip of dates) {
                for (let time of chip.time) {
                    const zoomDateTime = `${chip.date}T${time}:00`;

                    const generatedMeeting = await fetch('https://api.zoom.us/v2/users/me/meetings', {
                        method: 'POST',
                        body: JSON.stringify({
                            topic: title,
                            type: 2,
                            start_time: zoomDateTime,
                            duration: 60,
                            timezone: "America/Mexico_City",
                            password: "12334"

                        }),
                        headers: {
                            'Authorization': `Bearer ${accessToken}`,
                            'Content-Type': 'application/json'
                        }
                    });

                    const data = await generatedMeeting.json();
                    const zoomLink = data.join_url;
                    meetingDetails.push({
                        date: chip.date,
                        time: time,
                        link: zoomLink
                    });


                }
            }

            const newCourse = new Courses({
                title: title,
                description: description,
                image: imageurl,
                price: price,
                maxUsers:maxUsers,
                dates: dateTimeChips,
                meetings: meetingDetails
            })

            
            await newCourse.save();


          
        } catch (err) {
            console.log(err.message);
        }
        return new NextResponse("Course has been Created  ", { status: 201 });

    } catch (err) {
        console.log(err.message);
        return new NextResponse("Error", { status: 500 });
    }
};
