const fs = require("fs");
const readlineSync = require("readline-sync");

let fname = readlineSync.question("Enter the name of the file: ");

function createReset() {
    fs.writeFile(fname, "0", function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("File created/reset successfully.");
        }
    });
}

function readValue() {
    fs.readFile(fname, "utf8", function (err, content) {
        if (err) {
            console.log(err);
        } else {
            console.log("Current value:", content);
        }
    });
}

function incrementValue() {
    fs.readFile(fname, "utf8", function (err, content) {
        if (err) {
            console.log(err);
        } else {
            let value = parseInt(content) + 1;
            fs.writeFile(fname, value.toString(), function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Value incremented successfully.");
                }
            });
        }
    });
}

function decrementValue() {
    fs.readFile(fname, "utf8", function (err, content) {
        if (err) {
            console.log(err);
        } else {
            let value = parseInt(content) - 1;
            fs.writeFile(fname, value.toString(), function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Value decremented successfully.");
                }
            });
        }
    });
}

let option = readlineSync.question("Enter option (1: Create/Reset, 2: Read, 3: Increment, 4: Decrement): ");

switch (parseInt(option)) {
    case 1:
        createReset();
        break;
    case 2:
        readValue();
        break;
    case 3:
        incrementValue();
        break;
    case 4:
        decrementValue();
        break;
    default:
        console.log("Invalid option");
}
