//Activity 1
let name = "Arbaj";
let age = 20;

let message = `My name is ${name} and I am ${age} years old.`;

console.log(message); 

let multi_Str=`my name is Arbaj 
 and i am 20 year old`;
 console.log(multi_Str);

//  activity 2

let numbers = [1,2,3,4,5];

let [a,b]=numbers;

console.log(a);
console.log(b);

let book = {
    tital:"wings of fire",
    author: "a.p.j. abdul kalam",
    year: 1999
}
let {tital,author}=book;

console.log(tital);
console.log(author);

//Activity 3

let new_array =[...numbers,6,7,8,9];
console.log(new_array);
console.log(numbers);
function sumation(n1,n2,n3,n4,n5){
    return n1+n2+n3+n4+n5;
}
console.log(sumation(...numbers));

//Activity 4

function product(x,y=1) {
    return x*y;
    
}
console.log(product(10,20));

console.log(product(10));

//activity 5

 namez ="arbaj shaikh";
 age=20;
let obj1 ={
namez,
age,
fun() {
    console.log(`hello my name is ${this.namez} and i am ${this.age} year old`);   
 }
}
obj1.fun()




