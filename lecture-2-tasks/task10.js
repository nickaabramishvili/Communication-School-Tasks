//Task 10

//დაწერეთ ფუნქცია getDividors(), რომელიც აიღებს რიცხვს და დააბრუნებს მის გამყოფებს, გამყოფი იქნება 1-დან მაგ ციფრის ჩათვლით
//დაედოს ვალიდაცია სხვა მნიშვნელობის შეყვანისას
//ასევე შევამოწმოთ რომ პარამეტრი არ იყოს 0

//გამოძახების მაგალითი

getDividors(12); // [1,2,3,4,6,12]
getDividors("asd"); //Error,try again
getDividors(0); // Can't be null

function getDividors(num) {
    const dividers = [];
    if (typeof num !== "number") {
        console.log("Error,try again");
    } else if (num == 0) {
        console.log("Can't be null");
    } else {
        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                dividers.push(i);
            }
        }
        console.log(dividers);
        return dividers;
    }
}
