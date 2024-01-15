import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Bookings from "@/models/Bookings";




export const POST = async(request,{params})=>{
    try{
        const {bookingLink} = await request.json()
        
        await connect();
        const updateBooking = await Bookings.findOneAndUpdate(
            { _id: params.id },
            { $set: { aprroved:true,link:bookingLink} }, // Update the approved field to true
            { new: true } // Returns the updated document
        );

        if(updateBooking) {
            console.log('Booking updated successfully:', updateBooking);
            return new NextResponse("Request Approved",{status:200})
        } else {
            return new NextResponse("Request Not Approved",{status:401})
        }
        return new NextResponse("Request Approved",{status:200})
    } catch (err) {
        return new NextResponse(err.message,{status:500})
    }
}