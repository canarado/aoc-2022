import { input } from "./input";
import { readInput } from "./Challenge1";

export function solve(input: number[][]): number {
    let counter = 0;

    for(let i = 0; i < input.length; i++) {
        if(Math.max(input[i][0], input[i][2]) <= Math.min(input[i][1], input[i][3])) counter++;
    }

    return counter;
}