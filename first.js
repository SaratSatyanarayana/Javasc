// // console.log("Hello world");

// // const temp=() => "Hello World";
// // console.log(temp)

// const temp = (a,b) => 
// {
//     return a+b;
// }
// console.log(temp(1,2));

// const colors = ['red', 'green', 'blue', 'yellow'];
// const [first, ...restColors] = colors;

// console.log(first);       // Output: 'red'
// console.log(restColors);

// const isLoggedIn = true;
// const hasAccess = "sarat";
// const temp= isLoggedIn && hasAccess;
// console.log(temp)
// if (isLoggedIn && hasAccess) {
//   console.log("Access granted");
// } else {
//   console.log("Access denied");
// }


// const isMember = true;
// const message = isMember || "Welcome, member!"; // If `isMember` is true, `message` is assigned this text

// console.log(message);


// let arr=[1,2,3]
// // const temp=arr.reduce((acc,cur) => acc*cur , 1)
// const temp = arr.filter(num => num >= 3  );
// console.log(temp)


// const fruits = ["apple", "banana", "orange"];
// // fruits.splice(1, , "kiwi");
// // console.log(fruits);

// fruits.sort();
// console.log(fruits)

// const temp= [10,1,3,55,2,44];
// temp.sort((a,b) => a-b);
// console.log(temp);

// const numbers = [10, 2, 5, 8];
// const numbers1 = [10, 2, 5, 8];
// numbers.sort((a, b) => a - b);
// numbers1.sort();
// console.log(numbers1)
// console.log(numbers); // Output: [2, 5, 8, 10]

leap =2100;
// if( ((leap % 4 === 0) && (leap % 100 !== 0)) || (leap % 400 === 0))
// {
//    console.log(leap);
// }
// else{
//     console.log("not leap");
// }

let temp = (((leap % 4 === 0) && (leap % 100 !== 0)) || (leap % 400 === 0))? "leap" : "not leap";
console.log(temp)