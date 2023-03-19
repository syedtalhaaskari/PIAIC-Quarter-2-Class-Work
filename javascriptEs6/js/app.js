// try catch
console.log("-----------------------------------------------------------");
console.log("try catch")
let a;
try {
    a = akljsojaoiosapofs;
}
catch (e) {
    console.log(e);
}
finally { // This block will always be called. It will not depend on either try or catch block;
    console.log("Finally Block");
}
console.log("Talha");

// Promise
console.log("-----------------------------------------------------------");
console.log("Promise")
let prom = new Promise((res, rej) => {
    res("Success");
})

prom // This promise will get resolved
    .then(val => { // This then will be called
        console.log("Prom 1", val);
        return "My Call Back 2"
    })
    .then(val2 => { // This then will be called after above then block
        console.log("Prom 1 then", val2)
    })
    .catch(err => {
        console.log("Prom 1", err);
    })

let prom2 = new Promise((res, rej) => {
    rej("Failed");
})

prom2 // This promise will get rejected 
    .then(val => {
        console.log("Prom 2", val);
    })
    .catch(err => { // This will be called
        console.log("Prom 2 Catch", err);
        return "My Catch 1"
    })
    .then(err1Then1 => { // This will be called after above catch
        console.log("Prom 2 Catch Then", err1Then1);
    })

let prom3 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Success");
    }, 4000)
}).then(val => { // This will be called after 4 seconds
    console.log("Prom 3 then", val);
})

console.log({ prom3 });

// visit jsv9000.app or latentflip.com to understand how js manage tasks
// Use Promise.allSettled() to call multiple apis at the same time

// fetch
// It is a browser's built in api, it's not javascript's built in function
console.log("-----------------------------------------------------------");
console.log("fetch")
fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => {
        console.log("fetch then 1", response);
        return response.json()
    })
    .then(json => console.log(json))
    .catch(err => {
        console.log("err", err);
    })