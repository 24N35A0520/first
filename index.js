
const square = (x) => {
    return x * x;
}
const result = square(5);
console.log(result);

//given number is prime or not
const prime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;6
}
const prime_result=prime(5);
if(prime_result!== false){
    console.log("given number is prime");
}else{
    console.log("given number is not prime");
}   
//array function with single arguments
const res=x => x * x;
console.log(res(5));

//array function with no arguments
const greet = () => "Hello, World!"; 
console.log(greet());

//array function with multiple arguments
const add = (a, b) => a + b;
console.log(add(5, 10));
//array function with default parameters
const multiply = (a, b = 1) => a * b;  
console.log(multiply(5)); // 5
console.log(multiply(5, 2)); // 10

//filters it is used to pull the appropriate data based on the condition
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 == 0);
console.log(evenNumbers);

//to filter employee
const jobs = [
    { name: "teja", salary: 80000, job: "developer" },
    { name: "surya", salary: 55000, job: "designer" },
    { name: "kiran", salary: 80000, job: "developer" },
    { name: "sai", salary: 50000, job: "Tester" },
    { name: "Krish", salary: 100000, job: "manager" }
];
//const developers = jobs.filter(job => job.job === "developer");
//console.log(developers);

//you filter the jobs based on the salary
const highSalaryJobs = jobs.filter(job => job.salary >= 55000);
console.log(highSalaryJobs);
//to filter the job titles
const jobTitles = jobs.map(job => job.job);
console.log(jobTitles);

//Object destructuring 
const c={
    name: "teja",
    age: 25,
    city: "Hyderabad"
}
//general method suing dots and brackets
//object destructuring
const { name, age, city } = c;
console.log(name); // "teja"
console.log(age); // 25
console.log(city); // "Hyderabad"
//spread operator
// The spread operator allows you to expand an iterable (like an array) into its individual elements.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // [1, 2, 3, 4,]
const b = [1,2];
const b2 = [...b, 3, 4];
console.log(b2); // [1, 2, 3, 4]

//example
const e= ['a', 'b', 'c'];
const e2 = [...e, 1,2,3];
console.log(e2); // ['a', 'b', 'c', 1, 2, 3]

class person1{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const obj1 = new person1("krish",25);
console.log(obj1);
const obj2 = new person1("ram",30);
console.log(obj2);

//
class employee extends person1{
    constructor(name,age,position){
        super(name, age); // Call the constructor of the parent class
        this.position = position;
    }
}
const obj3 = new employee("teja", 25, "developer");
console.log(obj2);
const obj4 = new employee("surya", 30, "designer");
console.log(obj3);
