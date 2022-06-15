//Task5
//მოცემული მასივი დაალაკეთ კლებადობით ისე რომ არ გამოიყენოთ ჯავასკრიპტის ჩაშენებული მეთოდები [4,10,23,1,2,90]

let arr = [4, 10, 23, 1, 2, 90];

let newArr = [];
let BiggestCount;

for (let i = 0; i < arr.length; i++) {
    for (let y = 0; y < arr.length; y++) {
        // console.log("arr i = " + arr[i] + " da arr y = " + arr[y]);
        BiggestCount = arr[i];
        if (arr[i] < arr[y]) {
            BiggestCount = arr[y];
            newArr.push(BiggestCount);
        }
    }
}
console.log("biggestcount " + BiggestCount);
console.log("newarr " + newArr);

// ver gavakete
