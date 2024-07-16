//Activity 1

let a,b,c;
a=12;
b=14;
c=15;
if (a>0)
{

    console.log(`${a} is positive`);
}
else if (a<0)
    {
    
        console.log(`${a} is negative`);
    }
    else
    if (a==0)
        {
        
            console.log(`${a} is Zero`);
        }

let age;
age=20;

if (age>=18)
    {
    
        console.log(`person is eligible to vote`);
    }
    else
    {
    
        console.log(`person is not eligible to vote`);
    }

    //Activity 2

    if (a>b && a>c)
    {
        console.log(`${a} is greater than ${b} and ${c} `);
    }
    else if (b>a && b>c)
            {
                console.log(`${b} is greater than ${a} and ${c} `);
            }
            else 
            {
                console.log(`${c} is greater than ${a} and ${b} `);
            
            }

//Activity 3

let choice ;
choice =7;

switch(choice)
{
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("wedsday");
        break;
    case 4 :
        console.log("Thusday");     
    break;
    case 5 :
         console.log("Friday");
        break;
    case 6 :
         console.log("Saturdayday");
        break;
    case 7 :
         console.log("Sunday");
         break;
    default : console.log("Sorry...wrong input..");
}

let marks =85;

if (marks>100||marks<0)
    choice=1
else if (marks>=85)
    choice=5
else if(marks>=75)
    choice=2
else if (marks>=55)
    choice=3
else if (marks>=35)
    choice=4


switch(choice)
{
    case 1 :
        console.log("Sorry...wrong input..");
       break;
        
    case 2 :
        console.log("B");
        break;
    case 3 :
        console.log("C");
        break;
    case 4 :
        console.log("D");     
    break;
    case 5 :
        console.log("A");
        break;
    default : console.log("F");
}

//Activity 4

let num=11;

num%2==0?console.log("Even..."):console.log("Odd...");

//Activity 5

let year=2024;

if ((year%4==0&&year%100!==0)||(year%400==0))
{
    console.log("Leap year .....");
}
else
{
    console.log("Not Leap year ....."); 
}
