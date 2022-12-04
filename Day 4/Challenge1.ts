import { input } from "./input";

export function readInput(input: string): number[][] {
    let res: number[][] = [];
    let sbnl = input.split("\n");

    for(let i = 0; i < sbnl.length; i++) {
        let [split1, split2] = sbnl[i].split(",");
        let [p1i1, p1i2] = split1.split("-");
        let [p2i1, p2i2] = split2.split("-");
        res.push([
            parseInt(p1i1),
            parseInt(p1i2),
            parseInt(p2i1),
            parseInt(p2i2)
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