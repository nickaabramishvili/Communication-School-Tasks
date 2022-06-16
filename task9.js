//Task9
//დაწერეთ ფუნქცია isOdd, რომელსაც გადაეცემა პარამეტრად რიცხვი და დააბრუნებს
// true false  იმისდა მიხედვით არის თუ არა რიცხვი კენტი
// შემოწმდეს რომ თუ რიცხვისგან განსხვავებული პარამეტრია გამოვიდეს ერორი,
//ასევე შეზღუდვა დაედოს და შესაძლებელი იყოს მხოლოდ ერთი პარამეტრის მიღება
//მეტის შემთხვევაში დაილოგოს ერორი

//გამოძახების მაგალითი

isOdd(1); //true
isOdd(2); //false
isOdd(2, "asd"); //Error,try again
isOdd(1, 2, 3); // Error, too many params

function isOdd(...num) {
    if (num.length > 1) {
        console.log("too many params");
    } else if (typeof num[0] !== "number") {
        console.log("error try again");
    } else {
        const result = num[0] % 2 !== 0;
        console.log(result);
        return result;
    }
}
