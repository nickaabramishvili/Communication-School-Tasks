//   Task 4
// for ლუპის და if-ის გამოყენებით, გადაუარეთ მასივს [1, 2, 5, 9, -4, -1, 4, -10] და თუ მასივში არის ციფრი,რომელიც ნაკლებია 0-ზე დალოგეთ კონსოლში

let arr = [1, 2, 5, 9, -4, -1, 4, -10];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        console.log(arr[i]);
    }
}
