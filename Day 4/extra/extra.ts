import { input } from "./input"
import { biginput } from "./biginput";
import { readInput } from "../Challenge1";
import { solve } from "../Challenge2";
import { timePerf } from "../../util";

async function testLine(input: string): Promise<boolean> {
    let n1: number;
    let n2: number;
    let n3: number;
    let n4: number;
    let counter = 0;
    let temp = "";
    for(let i = 0; i < input.length; i++) {
        let curr = input[i];
        if(curr == "," || curr == "-") {
            let t = parseInt(temp);
            switch(counter) {
                case 0:
                    n1 = t;
                case 1:
                    n2 = t;
                case 2:
                    n3 = t;
            }

            temp = "";

            counter++;

            continue;
        }

        temp = temp.concat(curr)

        if(temp != "") n4 = parseInt(temp);
    }

    if(Math.max(n1, n3) <= Math.min(n2, n4)) return true
    else return false;
}

// console.log(testLine("24-66,23-25"));

async function promisesSolution(input: string): Promise<number> {
    let promises: Promise<boolean>[] = [];
    let counter = 0;

    let t = "";
    for(let i = 0; i < input.length; i++) {
        let curr = input[i];
        if(curr == "\r" || curr == "\n" || curr == "\r\n" && t != "") {
            promises.push(testLine(t));
            t = "";
            continue;
        }
        t = t.concat(curr);
        //console.log(t);
    }

    let resolvedAll = await Promise.all(promises);
    
    for(let res of resolvedAll) {
        if(res) counter++;
    }

    return counter;
}

function solveWhileRead(input: string): number {
    let counter = 0;
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

        if(Math.max(tempa[0], tempa[2]) <= Math.min(tempa[1], tempa[3])) counter++;
    }

    return counter;
}

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

let start = Date.now();
let results = solve(readInput(input));
let end = Date.now();

let startRead = Date.now();
let read = testRegexRead(input);
let endRead = Date.now();

let startSolve = Date.now();
let solved = solve(read);
let endSolve = Date.now();

let readTotal = (endRead - startRead) / 1000;
let solveTotal = (endSolve - startSolve) / 1000;
let total = readTotal + solveTotal;

let startSolveRead = Date.now();
let solution = solveWhileRead(biginput);
let endSolveRead = Date.now();

let solveReadTotal = (endSolveRead - startSolveRead) / 1000;

console.log(
`result: ${solved}

read input time: ${readTotal}s
solve time: ${solveTotal}s
total runtime: ${total}s

time to read + solve simultaneously: ${solveReadTotal}s`
);
// (async () => {
//     let perfNew = await timePerf(testLines, biginput);
    
//     console.log(`New Method Time:`, perfNew);

// })()