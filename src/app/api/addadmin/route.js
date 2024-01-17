import Admins from "@/models/Admins";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'


export const POST = async (request)=>{
try{
    await connect()
     console.log('hui');
    const {name,email,role,password } = await request.json();
    console.log(name,email,role,password,"blui");
    


    const isEmail = await Admins.findOne({email:email})
console.log(isEmail,"rrrr");
    if(isEmail){
        return new NextResponse('Email Already Exist',{status:403})
    }else{
        const hashedPassword =  await bcrypt.hash(password, 10);

        const newAdmin = new Admins({
            name:name,
            email:email,
            role:role,
            password:hashedPassword
        })

        console.log(newAdmin,"new");
        try{
           await newAdmin.save()
           return new NextResponse(JSON.stringify("Admin Added to Database"),{status:200})
        }catch(err){
            console.log("error in saving Admin");
        }
    }

}catch(err){
    return new NextResponse(err.message,{status:500})
}
}