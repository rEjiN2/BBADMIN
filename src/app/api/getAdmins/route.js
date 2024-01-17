import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Admins from "@/models/Admins";


export const GET = async (request) => {
try {
    
    await connect()

    const adminList = await Admins.find()


    return new NextResponse(JSON.stringify(adminList),{status:200})
} catch (error) {
    console.log(error.message);
    return new NextResponse(JSON.stringify(error.message),{status:500})

}
}