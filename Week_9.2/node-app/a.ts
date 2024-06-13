// function greet(firstName: string){
// console.log("Hello", firstName)
// }
// greet("Barun")

// function sum(a: number, b: number): number {
//     return a+b;
// }

// console.log(sum(4,5))


// interface User{
//     firstName: string;
//     lastName: string;
//     age: number
//     email?: string;
//     //email is optional user can pass or not it is his wish
// };

// function isLegal(user: User){
//     if(user.age > 18){
//         return true;
//     }else{
//         return false;
//     }
// }

// function greet(user: User){
//     console.log("Hi There" + user.firstName)
// }

// isLegal({
//     firstName: "Barun",
//     lastName: "Aaryan",
//     age: 22
// })


//enumerations
// type KeyInput = "up" | "down" | "left" | "right";
// enum Direction{
//     Up= "up", //0 //defining of enums
//     Down= "down" , //1
//     Left="left", //2
//     Right="right" //3 
// }

// function doSomething(keyPressed: Direction){
//     //do something
//     if(keyPressed == Direction.Up){

//     }
// }

// doSomething(Direction.Right);

//generics
type Input = number | string;

function firstEL(arr: Input[]){
    return arr[0];
}
const value= firstEL(["Barun"]);

//using generics
function identity<T>(arr: T[]){
    return arr[0];
}
let output1= identity<string>(["MyString"]);
let output2 = identity<number>([100]);

output1.toUpperCase();
