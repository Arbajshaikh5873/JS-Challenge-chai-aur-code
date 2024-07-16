//Activity 1

let i;
for (let i = 1; i<=10 ; i++) {
    console.log(i);   
}
console.log("5th table....");
for (let i = 1; i<=10 ; i++) {
    console.log(i*5);   
}

//Activity 2
i=1;
let sum=0;
while (i<=10) {
sum+=i;
i++;    
}
console.log("Sum of 1 to 10 is "+sum);

//Activity 3
i=1;
do
{
    console.log(i);
    i++;
}
while (i<=5);
i=1;
num=5;
let fact=1;
do{
    fact*=i;
    i++;
}
while (i<=num);
console.log(`factorial of ${num} is ${fact}`);

//Activity 4
let r,c;
for(r=0;r<5;r++)
{  let patternString="";
    for(c=0;c<=r;c++)
    {
     patternString+="* " ;
    }
    console.log(patternString);
}

//Activity 5

for(i=1;i<=10;i++)
{
    if (i==5)
    {
        continue;
    }
    else
    console.log(i);
}

for(i=1;i<=10;i++)
    {
        if (i==7)
        {
            break;
        }
        else
        console.log(i);
    }
