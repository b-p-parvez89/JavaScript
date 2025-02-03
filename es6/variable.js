// The let keyword allows you to declare a variable with block scope.
//and let is changable
var x=10;
{
    let x=2;
    //Here X is 2.
    console.log(x); //2
    x=3;
    console.log(x);//3
    
    
}
//Hre x is 10
console.log(x);//10


//the const keyword allows you to declare a constant (a JavaScript variable with a constant value)
//and const is not changable

const y=12;

{
    const y=5;

    console.log(y);// 5

    y=23;
   // console.log(y);//TypeError: Assignment to constant variable.
    
    
}


