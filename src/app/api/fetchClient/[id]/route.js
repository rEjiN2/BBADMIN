import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Subscribers from "@/models/Subscribers";


export const GET = async(request,{params})=>{
    try {
           
        await connect()
        const client = await Subscribers.findOne({_id:params.id})
      
        if(client){
          return new NextResponse(JSON.stringify(client), {
              status: 200,
              headers: {
                  "Content-Type": "application/json"
              }
          })
        }else{
          return new NextResponse(JSON.stringify("Admin Not found"),{status:404})
        }
         
          } catch (error) {
              return new NextResponse(JSON.stringify(err.message),{status:500})
          }  
}
