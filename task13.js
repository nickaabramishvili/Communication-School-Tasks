//Task13

//დაწერეთ arrow function, რომელიც მიიღებს მასივს და დააბრუნებს მასივში არსებულ უდიდეს რიცხვს

//გამოძახების მაგალითი

//ფუნქციას გადაეცემა

const arr = [1, 4, 5, 342];

//ფუნქცია დააბრუნებს 5-ს
let arrowFunc = (arr) => {
    return arr.sort((a, b) => {
        return b - a;
    })[0];
};
console.log(arrowFunc(arr));
