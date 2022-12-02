import { input } from "./input";
import { readInput } from "./Challenge1";

const obj: Record<string, string[]> = {
    A: ['B', 'A', 'C'],
    B: ['C', 'B', 'A'],
    C: ['A', 'C', 'B']
};

const mult: Record<string, number> = {
    win: 6,
    draw: 3,
    loss: 0,
    A: 1,
    B: 2,
    C: 3
};

const c: Record<string, any[]> = {
    X: [2, 'loss'],
    Y: [1, 'draw'],
    Z: [0, 'win']
};

function calculatePoints(input: string[][]): number {
    let sum = 0;

    for(let i = 0; i < input.length; i++) {
        let o = input[i][0];
        let u = input[i][1];

        let shape = obj[o][c[u][0]];

        let wlm = mult[c[u][1]];
        let sm = mult[shape];

        sum += wlm + sm;
    }

    return sum;
}


// console.log(calculatePoints(readInput(input)));