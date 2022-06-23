//Task11
//დავწეროთ ჩვენი იმპლემენტაცია მასივის filter მეთოდის,
// დავარქვათ myFilter, პარამეტრად უნდა გადაეცემოდეს პირველ ადგილას მასივი, ხოლო მეორეზე
//  ფუნქცია, რომლიც მიხედვითაც უნდა გაიფილტროს მასივი,
//აუცილებელია შემოწმდეს რომ პირველი პარამეტრი არის მასივი, ხოლო მეორე ფუნქცია
// ერთ-ერთი პირობის დარღვევის შემთხვევაში დაილოგოს შესამაბილი ერორი

//გამოძახების მაგალითი

myFilter([1, 2, 3], (el) => el % 2); // 2

myFilter("asd", (el) => el % 2); // First parameter should be an array

function myFilter(params, func) {
    if (Array.isArray(params) && typeof func === "function") {
        let result = params.map(func);
        console.log(result);
        return result;
    } else {
        console.log("First parameter should be an array");
    }
}
//  logika ver gavige sworad ra udna gafiltros
