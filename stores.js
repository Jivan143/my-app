const fs = require("fs").promises;
const readline = require("readline-sync");

let fname = "data.json";
let jsonData = { A: 0, B: 0 };

async function writeJson() {
    let str = JSON.stringify(jsonData);
    await fs.writeFile(fname, str);
    console.log("File  with JSON:", jsonData);
}

async function readJson() {
    let data = await fs.readFile(fname, "utf8");
    jsonData = JSON.parse(data);
    console.log("Read JSON from file:", jsonData);
}

async function incrementA() {
    await readJson(); 
    jsonData.A = jsonData.A + 1;
    await writeJson();
}

async function incrementB() {
    await readJson(); 
    jsonData.B = jsonData.B + 1;
    await writeJson();
}

async function main() {
    let option = readline.question("Enter Option\n1: Create/Reset\n2: Read\n3: IncrementA\n4: IncrementB\n");

    switch (option) {
        case "1":
            await writeJson();
            break;
        case "2":
            await readJson();
            break;
        case "3":
            await incrementA();
            break;
        case "4":
            await incrementB();
            break;
    }
}

main();
