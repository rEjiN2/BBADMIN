import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Subscribers from "@/models/Subscribers";

export const POST = async (request, { params })=>{
    try{
       await connect()
       const updatedData = await request.json();
         
        console.log(updatedData,"up");

       const adminUpdateClient = await Subscribers.findOneAndUpdate(
        { _id: params.id },
        { $set: updatedData }, 
        { new: true }
    );
   

    if(adminUpdateClient) {
        return new NextResponse(JSON.stringify("Client Updated"), { status: 200 });
    } else {
        return new NextResponse(JSON.stringify("Client Not found"), { status: 404 });
    }

         

     
    }catch(error){
        return new NextResponse(JSON.stringify(error.message),{status:500})
    }
}