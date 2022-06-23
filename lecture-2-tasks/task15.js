//Task 15

//შექმენით ობიექტი job , რომელსაც ექნება ერთი პარამეტრი salary,
// salary-ს გამოძახების დროს უნდა დაბრუნდეს სტრინგი, რომელიც დაგვიბრუნებს კარგი ხელფასია თუ ცუდი
// თუ თვის ბოლომდე ერთი კვირაა დარჩენილი დააბრუნოს რომ კარგი ხელფასია, თუ მეტი რომ ცუდი ხელფასია
// მინიშნება დაგჭირდებათ Date-ის გამოყენება

class Job {
    salary(params) {
        const date = new Date();
        const daysInMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        const currentDay = date.getDate();

        if (daysInMonth - currentDay <= 7) {
            return "good salary";
        } else {
            return "bad salary";
        }
    }
}
const test = new Job();
console.log(test.salary());
