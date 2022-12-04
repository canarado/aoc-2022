import { input } from "./input";

export function readInput(input: string): number[][] {
    let res: number[][] = [];
    let sbnl = input.split("\n");

    for(let i = 0; i < sbnl.length; i++) {
        let [split1, split2] = sbnl[i].split(",");
        res.push([
            parseInt(split1.split("-")[0]),
            parseInt(split1.split("-")[1]),
            parseInt(split2.split("-")[0]),
            parseInt(split2.split("-")[1])
        ]);
    }

    return res;
}

function solve(input: number[][]): number {
    let counter = 0;
    for(let i = 0; i < input.length; i++) {
        if(
            input[i][0] >= input[i][2] && input[i][1] <= input[i][3] ||
            input[i][2] >= input[i][0] && input[i][3] <= input[i][1]
        ) counter++;
    }

    return counter;
}