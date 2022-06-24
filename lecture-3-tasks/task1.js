const customer = {
    name: "john",
    age: "22",
};

function isAllowed(person) {
    return new Promise((resolve, reject) => {
        if (person.age >= 18) {
            resolve(true);
        } else {
            reject(false);
        }
    });
}

isAllowed(customer)
    .then((message) => {
        console.log(message);
    })
    .catch((err) => {
        console.log(err);
    });
