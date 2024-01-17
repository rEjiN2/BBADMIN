import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Subscribers from "@/models/Subscribers";

export const POST = async (request)=>{
    try{
       await connect()
       const {name,email,subscriptionType,price,epackage} = await request.json()
         console.log(name,email,subscriptionType,price,epackage);
         const isEmail = await Subscribers.findOne({email:email})
         if(isEmail){
            return new NextResponse('Email Already Exist',{status:403})
        }else{
           
     console.log('vanneda');
            const newSubscriber = new Subscribers({
                name:name,
                email:email,
                subscriptionType:subscriptionType,
                price:price,
                package:epackage
            })
    
            console.log(newSubscriber,"new");
            try{
               await newSubscriber.save()
               return new NextResponse(JSON.stringify("Subscriber Added to Database"),{status:200})
            }catch(err){
                console.log("error in saving Subscriber");
            }
        }

      return new NextResponse(JSON.stringify("Kollalloda mone nee"),{status:200})
    }catch(error){
        return new NextResponse(JSON.stringify(error.message),{status:500})
    }
}