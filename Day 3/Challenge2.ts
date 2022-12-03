import { input } from "./input";
import { readInput, scoreLetter } from "./Challenge1";

function chunkIntoThirds(input: string[]): string[][] {
    let res: string[][] = [];
    let counter = 0;
    let ci = 0;

    for(let i = 0; i < input.length; i++) {
        if(counter === 3) {
            counter = 0;
            ci++;
        }
        if(!res[ci]) res[ci] = [];

        res[ci].push(input[i]);

        counter++;
    }

    return res;
}

function solve(input: string[][]): number {
    let sum = 0;

    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < input[i][0].length; j++) {
            if(input[i][1].includes(input[i][0][j]) && input[i][2].includes(input[i][0][j])) {
                sum += scoreLetter(input[i][0][j]);
                break;
            }
        }
    }

    return sum;
}

console.log(solve(chunkIntoThirds(readInput(input))));

// i misunderstood day 2, but leaving this here cause funny
// function splitIntoThirds(input: string): string[] {
//     let ia = input.split("");
//     let res: string[] = [];

//     for(let i = 3; i > 0; i--) {
//         res.push(ia.splice(0, Math.ceil(ia.length / i)).join(""));
//     }

//     return res;
// }

// function solve(input: string[]) {
//     let sum = 0;

//     for(let i = 0; i < input.length / 3; i++) {
//         let thirds = splitIntoThirds(input[i]);
//         let thirdsa = thirds.map((v) => v.split(""));

//         if(thirdsa[0].indexOf(thirdsa[1][i]) != -1 && thirdsa[0].indexOf(thirdsa[2][i]) != -1) sum += scoreLetter(thirdsa[0][i]);
//     }

//     return sum;
// }