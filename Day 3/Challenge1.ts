import { input } from "./input";

export const alphabet: string[] = [...[...Array(26)].map((_, i) => String.fromCharCode(i + 97)), ...[...Array(26)].map((_, i) => String.fromCharCode(i + 65))];

export function readInput(input: string): string[] {
    return input.split("\n");
}

export function scoreLetter(letter: string): number {
    return alphabet.indexOf(letter) + 1;
}

function findSameItem(group: string): string {
    let a = group.split("");

    let middle = Math.ceil(a.length / 2);

    let half1 = a.splice(0, middle);
    let half2 = a.splice(-middle);

    let res: string = "";

    for(let i = 0; i < half1.length; i++) {
        if(half2.indexOf(half1[i]) != -1) res = half1[i];
    }

    return res;
}

function solve(input: string[]) {

    let sum = 0;

    for(let i = 0; i < input.length; i++) {
        let item = findSameItem(input[i]);
        sum += scoreLetter(item);
    }

    return sum;
}

//console.log(solve(readInput(input)));