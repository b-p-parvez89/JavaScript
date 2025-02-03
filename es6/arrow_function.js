
const Addnumber=(a,b)=>a+b;

const result=Addnumber(5,3);
// console.log(result);



const sayHello=()=>"Hello World";

// console.log(sayHello());


const sqr=x=>x*x;
// console.log(sqr(444));




function Person(){
    this.name='Jack';
    this.age=23;
    this.sayAge=function(){
        // console.log(this.age);
        
        let sayName=()=>{
        //    console.log(`My name is ${this.name} and my age ${this.age}`);
           
            
            
        }

        sayName()
    }
}

const x=new Person();

x.sayAge()






const fruits =["Bannana", "Orange", "Apple", "Mango"];

let [fruits1, fruits2]=fruits;


const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const years=[...q1, ...q2, ...q3, ...q4];
// console.log(years);

const number= [23, 55, 21,84,58];
let maxValue =Math.max(...number)
console.log(maxValue); //84
