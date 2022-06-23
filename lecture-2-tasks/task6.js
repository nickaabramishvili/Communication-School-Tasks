let arr = [4, 10, 23, 1, 2, 90];
let oddNumbersCount = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0 && arr[i] < 20) {
        oddNumbersCount += 1;
        console.log("orze iyopa " + arr[i]);
    } else {
        console.log("jami ver moidzebna");
    }
}
console.log(oddNumbersCount);
