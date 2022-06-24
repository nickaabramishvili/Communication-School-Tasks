// function makeRequest(location) {
//     return new Promise((resolve, reject) => {
//         if (location === "gldani") {
//             resolve("gldani is resolved");
//             console.log(`Making Request to ${location} 1`);
//         } else {
//             reject("gldani was rejected");
//         }
//     });
// }

// function processRequest(response) {
//     return new Promise((resolve, reject) => {
//         console.log("Processing gldani 2");
//         resolve(` ${response}`);
//     });
// }

// makeRequest("gldani")
//     .then((response) => {
//         console.log("Received gldani");
//         return processRequest(response);
//     })
//     .then((processedResponse) => {
//         console.log(processedResponse);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// async function doWork() {
//     try {
//         const response = await makeRequest("sgldani");
//         console.log("response Received 3");
//         const processedResponse = await processRequest(response);
//         console.log(processedResponse);
//     } catch (error) {
//         console.log(error);
//     }
// }

// doWork();

function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolved");
        }, 3000);
    });
}

async function printResolvedPromise() {
    const promisedValue = await resolvedPromise();
    console.log(promisedValue);
}
printResolvedPromise();
