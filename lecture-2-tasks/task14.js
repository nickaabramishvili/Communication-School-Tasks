//Task14

//დაწერეთ ფუნქცია toUpperCaseFunc, რომელიც პარამეტრად მიირებს სტრინგს, სხვა მნიშვნელობის შემტხვევაში დაილოგოს
//ერორი, ხოლო მიღებული სტრინგის პირველ ასოს შეუცვლიე რეგისტრს, თუ არის lowerCase
//გახდის upperCase-ს, არ გამოვიყენოთ ჯავასკრიპტის ჩაშენებული მეთოდები

//გამოძახების მაგალითი
function toUpperCaseFunc(params) {
    if (typeof params === "string") {
        let result = params.charAt(0).toUpperCase() + params.substring(1).toLowerCase();
        console.log(result);
        return result;
    } else {
        console.log("error try again");
    }
}

toUpperCaseFunc("jane"); // Jane
toUpperCaseFunc(1); // Error, try again
