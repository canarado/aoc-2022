import { input } from "./Challenge.input";

// split all inputs on newline, iterate over, push non-empty values into a result, increase count-for-index into result array on empty value
export function splitInputIntoGroupsByNewline(input: string): string[][] {

    let count = 0;
    let res: string[][] = [];
    let split = input.split("\n");

    for(let i = 0; i < split.length; i++) {
        if(split[i] == "" || split[i] == "\n") {
            count++;
            continue;
        }
        if(!res[count]) res[count] = [];

        res[count].push(split[i]);

    }

    return res;
}

export function reduceCalories(input: string[][]): number[] {

    let res: number[] = [];

    for(let i = 0; i < input.length; i++) {

        let sum = 0;

        for(let j = 0; j < input[i].length; j++) {
            sum += parseInt(input[i][j]);
        }

        res.push(sum);
    }

    return res;
}

let groupedInputs = splitInputIntoGroupsByNewline(input);
let caloriesPerElf = reduceCalories(groupedInputs);

let answer = Math.max(...caloriesPerElf);