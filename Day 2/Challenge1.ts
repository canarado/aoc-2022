import { input } from "./input";

export const obj: Record<string, string[]> = {
    A: ["Z", "X", "Y"],
    B: ["X", "Y", "Z"],
    C: ["Y", "Z", "X"]
};

export const mult: Record<string, number> = {
    win: 6,
    draw: 3,
    loss: 0,
    X: 1,
    Y: 2,
    Z: 3
}

export function readInput(input: string): string[][] {
    return input.split("\n").map((value) => [value.split(" ")[0], value.split(" ")[1]]);
}

function calculatePoints(input: string[][]): number {
    let sum = 0;

    for(let i = 0; i < input.length; i++) {
        let opponent = input[i][0];
        let us = input[i][1];

        if(obj[opponent].indexOf(us) == 0) sum += mult.loss;
        else if(obj[opponent].indexOf(us) == 1) sum += mult.draw;
        else if(obj[opponent].indexOf(us) == 2) sum += mult.win;

        sum += mult[us];
    }

    return sum;
}

// console.log(calculatePoints(readInput(input)));