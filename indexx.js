function greet(name) {
    console.log(`Hello ${name}`)
}

function greetVishwas(greetFn) {
    const name = "vishwas";
    greetFn(name);
}

greetVishwas(greet)