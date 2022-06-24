// function strintArray(arr) {
//     return new Promise((resolve, reject) => {
//         if (arr.length < 1) {
//             resolve({
//                 key: arr[0],
//                 length: arr[0].length,
//             });
//         } else {
//             arr.map((el) => {
//                 if (typeof el !== "string") {
//                     reject("rejected");
//                 }
//             });
//         }
//     });
// }

// async function func(...arr) {
//     try {
//         let result = await strintArray(arr);
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }
// func(["dasda", "dasda"]);

function stringArr(arr) {
    return new Promise((resolve, reject) => {
        const containsOnlyStrings = arr.every((el) => typeof el === "string");

        if (!arr.length || !Array.isArray(arr) || !containsOnlyStrings) {
            reject("error");
        } else {
            const newArr = arr.map((el) => ({
                key: el,
                length: el.length,
            }));
            resolve(newArr);
        }
    });
}

async function justFunc(arguments) {
    try {
        const result = await stringArr(arguments);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
justFunc(["a", "b"]);
