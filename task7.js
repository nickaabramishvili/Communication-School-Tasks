function cube(x) {
    if (typeof x !== "number") {
        console.log("Error, try again!");
    } else {
        return x * x * x;
    }
}

console.log(cube("2"));
