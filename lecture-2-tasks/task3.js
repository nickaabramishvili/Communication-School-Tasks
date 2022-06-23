// Task 3

// ჩაანაცვლეთ If-Else switch statement-ით

if (color == "Red") {
    message = "R";
} else if (color == "Yellow") {
    message = "Y";
} else if (color == "") {
    message = "none";
} else {
    message = undefined;
}

switch (color) {
    case "Red":
        message = "R";
        break;
    case "Yellow":
        message = "Y";
        break;
    case "":
        message = "none";
        break;

    default:
        message = undefined;
}
// მგონ ისწ0ორად მაქვს
