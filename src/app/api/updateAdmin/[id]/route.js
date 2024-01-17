import connect from "@/utils/db";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import Admins from "@/models/Admins";

export const POST = async(request, { params }) => {
    try {
        await connect();
        
        const updatedData = await request.json();

        // Check if password is provided and hash it
        if(updatedData.password) {
            const hashedPassword = await bcrypt.hash(updatedData.password, 10);
            updatedData.password = hashedPassword;
        }

        // Update the admin data in the database
        const adminUpdateBooking = await Admins.findOneAndUpdate(
            { _id: params.id },
            { $set: updatedData }, 
            { new: true }
        );

        if(adminUpdateBooking) {
            return new NextResponse(JSON.stringify("Admin Updated"), { status: 200 });
        } else {
            return new NextResponse(JSON.stringify("Admin Not found"), { status: 404 });
        }
    } catch (error) {
        return new NextResponse(JSON.stringify(error.message), { status: 500 });
    }
};
