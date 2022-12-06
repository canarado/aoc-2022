import { writeFile } from "fs";

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let space = "    ";

let cols = 1000;
let crateAmount = 20_000;
let instAmount = 20_000_000;

/**
 * create 1000 arrays, fill with 750 random
 * items from alphabet.
 * 
 * loop over arrays, push last item in array to new row array, 
 * iterate down until first item is added.
 * 
 * choose 2 random arrays, select random number 1-array1.len
 * `move {random number} from {array1.index + 1} to {array2.index + 1}`
 */

/**
 * hehehe
 */
function randomNumber(min: number, max: number): number { 
    return Math.floor(Math.random() * (max - min) + min);
}

function random2(from: number, to: number): [number, number] {
    let r1 = randomNumber(from, to);
    let r2 = randomNumber(from, to);

    if(r1 == r2) return random2(from, to);
    return [r1, r2];
}

let arrays: any[][] = [];
for(let i = 0; i < cols; i++) {
    arrays[i] = [];
}

let biggestArray = 0;

for(let i = 0; i < crateAmount; i++) {
    let ri = randomNumber(0, cols - 1);
    arrays[ri].push(alphabet[randomNumber(0, alphabet.length - 1)]);
    if(arrays[ri].length > biggestArray) biggestArray = arrays[ri].length;
}

let rows: any[][] = [];
for(let i = 0; i < biggestArray; i++) {
    rows[i] = [];
    for(let j = 0; j < arrays.length; j++) {
        let item = arrays[j][i];
        if(!item) rows[i].push(space)
        else rows[i].push(`[${item}] `);
    }
}

rows = rows.reverse();

let inputString = "";
for(let i = 0; i < rows.length; i++) {
    let row = rows[i].join("").concat("\n");
    inputString = inputString.concat(row);
}

inputString += " "
for(let i = 0; i < cols - 1; i++) {
    inputString = inputString.concat(`${i + 1}   `);
}
inputString += "\n\n";

let map: Record<string, number> = {};
for(let i = 0; i < instAmount; i++) {
    let [r1, r2] = random2(0, cols - 1);
    let a1 = map[r1] ?? arrays[r1].length;
    let a2 = map[r2] ?? arrays[r2].length;
    let amount = randomNumber(1, a1 - 1);
    map[r1] = map[r1] ? map[r1] - amount : a1 - amount;
    map[r2] = map[r2] ? map[r2] + amount : a2 + amount;
    inputString += `move ${amount} from ${r1} to ${r2}${i == instAmount - 1 ? "" : "\n"}`;
}

writeFile("./CHUNGOinput.txt", inputString, (err) => {
    if(err) console.error(err);
});