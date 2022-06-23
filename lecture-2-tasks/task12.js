//Task12

//მოცემულია მასივი ,  დაუარეთ მასივს და შექმენით ახალი მასივი, რომელიც შეიცავს ყველა მასივში
//შემავალი სტრინგის სიგრძეს, აუცილებელია შემოწმება მასივის, რომ ყველა მნიშვნელობა იყოს სტრინგი

//გამოძახების მაგალითი
function func(arr) {
    const newarr = arr
        .map((el) => {
            if (typeof el !== "number") {
                return el.length;
            }
        })
        .filter((el) => el !== undefined);

    if (newarr.length == arr.length) {
        console.log(newarr);
        return newarr;
    } else {
        console.log("error");
    }
}

var arr = ["abcd", "abcde", "ab", "abc"]; // var lengthArray = [4,5,2,3]
func(arr);
var arr = ["abcd", 2]; //Error, all values should be a string
func(arr);
//გამოიყენეთ map მე
