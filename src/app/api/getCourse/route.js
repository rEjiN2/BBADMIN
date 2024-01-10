import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Courses from "@/models/Courses";

export const GET = async (request) => {
    try {
        await connect();
        console.log("Database connected");

        const courses = await Courses.find();
        console.log("Courses retrieved:", courses);

      
        if (courses.length === 0) {
            return new NextResponse("No courses available", { status: 404 });
        }

    
        return new NextResponse(JSON.stringify(courses), {
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
