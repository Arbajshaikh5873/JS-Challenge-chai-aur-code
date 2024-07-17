
//Activity 1

let num;
isEven(15);
isEven(70);
isEven(13);
function isEven(num) {
    if (num%2==0)
    {
        console.log("Even...");
    }
    else
    {
        console.log("Odd...");
    }
}
let square;
 square=calSquare(15);
console.log(`square of ${15} is ${square}`);

 square=calSquare(5);
console.log(`square of ${5} is ${square}`);

 square=calSquare(10);
console.log(`square of ${10} is ${square}`);
function calSquare(num) {
    return num*num;   
}

//Activity 2

let max = function (a,b)
{
    if (a>b)
    {
        return a;
    }
    else
    {
    return b;
    }
}
console.log(`max between ${100} and ${55} is ${max(100,55)}`);

let conString = function (s1,s2) {
    return s1+s2;
}
console.log(`Concatination of  Arbaj and Shaikh is ${conString("Arbaj ","Shaikh")}`);

//Activity 3
let sum = (a,b) => a+b;
console.log(sum(10,20));

let checkChar=(s,char)=>s.includes(char);
console.log(checkChar("hello World","a"));
console.log(checkChar("hello World","d"));

//Activity 4

let mult = (a,b=10)=>a*b;
console.log(mult(10,20));
console.log(mult(11));

//Activity 5

let fun1 = (visit,num) => {
    
    for (let i=0;i<num;i++)
    {
        visit();
    }
}

visit=()=>console.log("hello World");

fun1(visit,5);

let fun2=(fun3,fun4,val)=>
{
    let result =fun3(val);
    fun4(result);
}
let fun3= (val)=>{
    result=val*val;
    console.log(`Square of ${val} is ${result}`);
    return result;
}
let fun4= (val)=>{
    result=val*val;
    console.log(`Square of ${val} is ${result}`);
}
fun2(fun3,fun4,3);


