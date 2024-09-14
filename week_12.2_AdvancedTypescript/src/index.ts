// interface User{
//     id: string;
//     name: string;
//     age: number;
//     email: string;
//     password: string;
// };
//Pick

// type UpadateProps= Pick<User , 'name'| 'age' | 'email'>
// type UpadatePropsOptional = Partial<UpadateProps>

// function updateUser(updateUser:UpadatePropsOptional){
//     //hit the database to update the user
// }

// updateUser({
//     name: "Barun"
// })

//readonly
// type User={
//     readonly name: string;
//     readonly age: number;
// }

// const user: User={
//     name: "Barun",
//     age: 21
// }

// user.name= "aaryan"

//record and maps
// type User ={
//     id: string;
//     username: string;
// }
// type Users={
//     [key: string]: User;
// }

// const users: Users={
//     "ras@qd1":{
//         id: 'ras@qd1',
//         username: 'Barun'
//     },
//     "ras1dr@":{
//         id: 'ras1dr@',
//         username: 'raman'
//     }
// }

// type Users= Record<string, {age: number; name: string}>;
// const users: Users= {
//     "ras@qd1": {age: 21, name: "barun"},
//     "ra@red": {age: 22, name: "aaryan"}
// }

//map
// type User = {
//     name: string;
//     age: number;
//     email: string;


// }


// const users = new Map<string, User>()
// users.set("ras@qd1", {name: "Barun", age: 23, email: "ras@qd1"});
// users.set("sarta@qd1", {name: "Aaryan", age: 23, email: "sar@qd1"});

// const user = users.get("ras@qd1")
// users.delete("ras@qd1")
// console.log(user)

// //exclude
// type EventType= 'click' | 'scroll' | 'mousemove';
// type ExcludeEvent = Exclude<EventType, 'scroll'>; //click | 'mousemove"

// const handleEvent= (event: ExcludeEvent)=>{
//     console.log(`Handling event: ${event}`);

// };
// handleEvent('click'); //Ok
// // handleEvent('scroll'); //Ok //error

//Type Inference in ZOD
import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});
export type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: FinalUserSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);
