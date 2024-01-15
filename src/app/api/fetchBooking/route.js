import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Bookings from "@/models/Bookings";



export const GET = async (request) => {
    try {
        await connect();
        console.log("Database connected");

        const bookings = await Bookings.aggregate([
            {
                $addFields: {
                    convertedCourseId: { $toObjectId: "$courseId" } // Convert courseId to ObjectId
                }
            },
            {
                $lookup: {
                    from: "courses", // Replace with your actual Courses collection name
                    localField: "convertedCourseId",
                    foreignField: "_id",
                    as: "courseDetails"
                }
            },
            { $unwind: "$courseDetails" },
            { $unwind: "$courseDetails.meetings" },
            {
                $match: {
                    $expr: {
                        $and: [
                            { $eq: ["$date", "$courseDetails.meetings.date"] },
                            { $eq: ["$time", "$courseDetails.meetings.time"] }
                        ]
                    }
                }
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    email: 1,
                    phone: 1,
                    date: 1,
                    time: 1,
                    package: 1,
                    courseId: 1,
                    userId: 1,
                    createdAt: 1,
                    updatedAt: 1,
                    aprroved:1,
                    __v: 1,
                    link: "$courseDetails.meetings.link"
                }
            }
        ]);
        

        console.log("Courses retrieved:", bookings);
      
        if (bookings.length === 0) {
            return new NextResponse("No Bookings available", { status: 404 });
        }

    
        return new NextResponse(JSON.stringify(bookings), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (err) {
        console.error("Error fetching courses:", err.message);
        return new NextResponse("An error occurred while fetching courses", { status: 500 });
    }
};
