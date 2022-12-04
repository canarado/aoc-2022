import { input } from "./input";
import { readInput } from "../Challenge1";
import { solve } from "../Challenge2";

function testRegexRead(input: string): number[][] {
    let res: number[][] = [];
    let sbnl = input.split("\n");

    for(let i = 0; i < sbnl.length; i++) {
        let sbn = sbnl[i].split("");
        let tempa: number[] = [];
        let temps = "";

        for(let j = 0; j < sbn.length; j++) {
            let current = sbn[j];
            if(current == "," || current == "-") {
                tempa.push(parseInt(temps));
                temps = "";
                continue;
            }
            temps = temps.concat(current);
        }

        if(temps != "") tempa.push(parseInt(temps));

        res.push(tempa);
    }

    return res;
}

console.log(testRegexRead(input));

// let start = Date.now();
// let results = solve(readInput(input));
// let end = Date.now();

let startRead = Date.now();
let read = testRegexRead(input);
let endRead = Date.now();

let startSolve = Date.now();
let solved = solve(read);
let endSolve = Date.now();

let readTotal = (endRead - startRead) / 1000;
let solveTotal = (endSolve - startSolve) / 1000;
let total = readTotal + solveTotal;

console.log(
`result: ${solved}

read input time: ${readTotal}s
solve time: ${solveTotal}s
total runtime: ${total}s`
)