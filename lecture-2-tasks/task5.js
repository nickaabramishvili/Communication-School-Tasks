//Task5
//მოცემული მასივი დაალაკეთ კლებადობით ისე რომ არ გამოიყენოთ ჯავასკრიპტის ჩაშენებული მეთოდები [4,10,23,1,2,90]

let arr = [4, 10, 23, 1, 2, 90];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
function reverseSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let tmp = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] < tmp; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = tmp;
    }
    return arr;
}
console.log("newarr " + reverseSort(arr));
