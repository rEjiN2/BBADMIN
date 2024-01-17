import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Admins from "@/models/Admins";

export const GET = async (request,{params}) => {
    try {
           
  await connect()
  const admin = await Admins.findOne({_id:params.id})

  if(admin){
    return new NextResponse(JSON.stringify(admin), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
  }else{
    return new NextResponse("Admin Not found",{status:404})
  }




    return new NextResponse("Success",{status:200})
    } catch (error) {
        return new NextResponse(err.message,{status:500})
    }
}