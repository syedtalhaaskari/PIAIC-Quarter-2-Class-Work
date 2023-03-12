// Template Literals
console.log("-----------------------------------------------------------");
console.log("Template Literals")
let num = 1;
let text1 = "Test" + num + "AB";

console.log("a ", text1)

let text2 = `Test ${num} 
AB`;

console.log("b ", text2)

// Hoisting
console.log("-----------------------------------------------------------");
console.log("Hoisting")
let chr = "Talha" // This will work
console.log(chr);
// console.log(chr1);
// let chr1 = "Talha"; // This will through an error

console.log("1 ", add()); // This will work

function add() {
    return 2 + 2;
}

console.log("2 ", add());

// console.log("3 ", sub()); // This will through an error

let sub = () => {
    return chr;
}

console.log("4 ", sub());

console.log("5 ", getName()); // This will return test
// This is because the priority of chr variable in getName name function is higher than the chr variable declared above

function getName() {
    // console.log(chr); // This will through an error;
    // If we use var then it will show undefined
    let chr = "Test";

    return chr;
}

let result = () => {
    let totalMarks = 100;
    let obtainedMarks = 80;
    return calculate = () => {
        return (obtainedMarks * 100) / totalMarks;
    }
}

let FinalResult = result(); // This will return a function

console.log("7 ", FinalResult()); // This will return value

let result2 = (totalMarks = 100, obtainedMarks = 0) => (_name = "Anonymous", _sub = "Anonymous") => `Congratulations Mr. ${_name} you are passed ${_sub} exam with ${(obtainedMarks * 100) / totalMarks}%`;

let CSS = result2(100, 80);
let TalhaCss = CSS("Talha", "CSS");
let JS = result2(200, 140);
let TalhaJs = JS("Talha", "JS");
let TalhaHtml = result2(100, 99)("Talha", "HTML");
console.log("8 ", TalhaCss); // Return Congratulations Mr. Talha you are passed CSS exam with 80%
console.log("9 ", TalhaJs); // Return Congratulations Mr. Talha you are passed JS exam with 70%
console.log("10 ", TalhaHtml); // Return Congratulations Mr. Talha you are passed HTML exam with 99%
console.log("11 ", result2(200, 200)("Talha", "React")); // Return Congratulations Mr. Talha you are passed React exam with 100%

// Events
// In terms of html/browser - any activity on webpage is called event
// Eg: Hover, click, resize, double click etc.
console.log("-----------------------------------------------------------");
console.log("Events");

// Object
// It is a collection of key value pair, which can hold multiple data types in it
console.log("-----------------------------------------------------------");
console.log("Object");
let user = {
    userName: "Syed Talha Askari",
    phone: "090078601",
    age: 25,
    email: "abc@gmail.com",
    collection: {
        cars: ["Rolls Royce", "Formula 1"]
    }
};

console.log("1 ", user);
console.log("2 ", user.userName);
console.log("3 ", user["age"]);
console.log("4 ", Object.keys(user));
console.log("5 ", Object.values(user));
console.log("6 ", user.country); // This will show undefined
console.log("7 ", user.collection.cars);
// console.log("8 ", user.cities.visited); // This will through an error
console.log("9 ", user?.cities?.visited); // This will not through error. "?" This is called optional chaining

let ameen = user;
ameen.userName = "Ameen Alam";
console.log("10 ", ameen.userName); // This will change userName of both ameen and user
console.log("11 ", user.userName); 

user.userName = "Syed Talha Askari"
let hamza = Object.assign({}, user);
hamza.collection.cars = ["Bugatti"];
console.log("12 ", hamza.collection.cars); // This will change userName of only hamza but if we change car array of hamza then it will also change car array of user object
console.log("13 ", user.collection.cars); // This is because Object.assign does not iteratively deep clone object it just clone the first level of given object

hamza.collection.cars = ["Rolls Royce", "Formula 1"]
let deepCopy = JSON.stringify(user);
deepCopy = JSON.parse(deepCopy);
deepCopy.collection.cars = ["mehran"];
console.log("14 ", deepCopy.collection.cars); // This will deep clone object iteratively
console.log("15 ", user.collection.cars);