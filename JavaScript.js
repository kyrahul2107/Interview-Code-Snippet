
// Que: Concept of Hoisting 
// console.log(a);
// console.log(b);

// let b=10;
// var a=20;


// Que: Closure
// function outer()
// {
//     let a=5;
//     function inner()
//     {
//         console.log(a); 
//     }
//     a=8;
//     return inner;
// }

// const value=outer();
// value();

// Explanation: When outer function executioin is over it return with the the updated variable and value function invoked the inner function again


// Que: IEFF and var scoping

// function outer()
// {
//    (()=>{
//     var a=10;
//     var b=20;
//    })()
//    console.log(a,b); 
// }

// outer()

// The var variable has function Scope only and in this case a and b are accessed inside
// arrow function only outside the function It will throw error


// Que: setTimeout

