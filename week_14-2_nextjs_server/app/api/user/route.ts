import { NextRequest } from "next/server"
import {PrismaClient} from "@prisma/client"
const client = new PrismaClient();
import client from "@/db";

// export async function GET(){
//     //database logic 
//     return Response.json({
//     email: "barunaryna1@gmail.com",
//     name: "Barun"
//     })
// }  

export async function POST(req:NextRequest){
    //extract the body
const body= await req.json();
await client.user.create({
    data:{
        username: body.username,
        password: body.password
    }
})

    //store the body in the database
console.log(body);


    return Response.json({
    message: "You are logged in"
    })
} 