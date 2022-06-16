function sum(...args) {
    let initialState = 0;
    const total = args.reduce((a, b) => a + b, initialState);

    if (typeof total === "number") {
        return total;
    } else {
        console.log("not numbers");
    }
}

const summ1 = sum(2, 3, "dasds", 6, 6);

console.log("dasd " + summ1);
