
//Activity 1

let book ={
    title: "wings of fire ",
    author: "a.p.j.abdul kalam",
    year: 1999
}

console.log(book);

console.log(book.title);
console.log(book.author);

//Activity 2

book.getDetails= function(){
return `${this.title} by ${this.author}`;
};
console.log(book.getDetails());

book.update= function (year){
this.year=year;
console.log('year is updated ');
};
book.update(2000);
console.log(book);

//Activity 3

let library ={
    
    name: "City Library",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960  
        },
        {
            title: "1984",
    author: "George Orwell",
    year: 1949
        },
        {
         
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925   
        }    ]
};

console.log(library);

console.log(`name of the library is ${library.name}`);
library.books.forEach((e,i) => {
    console.log(`${i+1} tital=> ${e.title} `);
    console.log(`author=> ${e.author} `);
    console.log(`year=> ${e.year} `);   
});
 book.getinfo = function ()
 {
    s=`tital=> ${this.title} in year=> ${this.year} `;
    return s;
 }

console.log(book.getinfo());

for (let key in book) {
   console.log(`${key} : ${book[key]}`);
}
console.log("Keys...");
let  key =Object.keys(book);
key.forEach((e)=>console.log(e));
console.log("Values...");
let text = Object.values(book);
text.forEach((e)=>console.log(e));


