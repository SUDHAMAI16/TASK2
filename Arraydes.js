const numbers=[1,2,3,4,5,6];

const[first,second,third]=numbers;
console.log(first);
console.log(second);
console.log(third);

//skipping a elements
const[firstElement, ,thirdElement]=numbers;
console.log(firstElement);
console.log(thirdElement);

//assigning default values 
const[a,b,c=10]=[1,2];
console.log(a);
console.log(b);
console.log(c);

//using rest operator
const[firstnumber,secondnumber,...restofnumbers]=numbers;
console.log(firstnumber);
console.log(secondnumber);
console.log(restofnumbers)
