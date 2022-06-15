// Task2
// ჩაანაცვლეთ if-else ტერნარული ოპერატორით

let color;
let message;

if (color == "Red") {
    message = "R";
} else if (color == "Yellow") {
    message = "Y";
} else if (color == "") {
    message = "none";
} else {
    message = undefined;
}

color == "red" ? (message = "R") : color == "Yellow" ? (message = "Y") : color == "" ? (message = "none") : (message = undefined);

console.log(message);
