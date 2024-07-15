
//activity 1

let a,b,c;
a=10;
b=20;
c=30;
console.log(`Addition of ${a} and ${b} is ${a+b}`);
console.log(`Subtract of ${a} and ${b} is ${a-b}`);
console.log(`Multiply of ${a} and ${b} is ${a*b}`);
console.log(`Division of ${a} and ${b} is ${a/b}`);
console.log(`Remainder when ${b} is divided by ${a} is ${b%a}`);

//activity 2

// a+=b; means a=a+b;
console.log(`The value of ${a} after adding ${b} is ${a+=b}`);
console.log(`The value of ${a} after subtracting ${b} is ${a-=b}`);

//activity 3

if(a>b)
{
    console.log(` ${a} is greater than ${b}`);
}
 if(a<b)
    {
        console.log(` ${b} is greater than ${a}`);
    }
     if(a>=b)
        {
            console.log(` ${a} is greater than ${b}`);
        }
         if(a<=b)
            {
                console.log(` ${b} is greater than ${a}`);
            }
            if(a==b)
                {
                    console.log(` ${b} are same ${a}`);
                }
                else  if(a===b)
                    {
                        console.log(` ${b} are same and their data types are also same  ${a}`);
                    }
                    else 
                    {
                        console.log(` ${b} and  ${a} are not same`);
                    }

                    //Activity 4


if (c>b && c>a)
    {
        
        console.log(` ${c} is greater than ${b} and ${a}`);
    }

    if (b>a || b>c)
        {
            
            console.log(` ${b} is greater than  ${a} or ${c}`);
        }

        if (a!=b)
            {
                
                console.log(` ${a} and ${b} are not same `);
            }


            // Activity 5
        (a<0) ? console.log(` ${a} is negative`) :   console.log(` ${a} is positive`); 
      
    
    

