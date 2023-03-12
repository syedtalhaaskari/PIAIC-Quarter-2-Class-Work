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