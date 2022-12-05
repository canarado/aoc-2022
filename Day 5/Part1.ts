import { input, smallInput } from "./input";
import { timePerf } from "../util";

export async function readCrates(input: string): Promise<Record<string, string[][] | string>> {
    let res: string[][] = [];
    
    let nCounter = 0;
    for(let i = 0; i < input.length; i = i + 4) {
        let temp = "";
        for(let j = 0; j < 4; j++) {
            temp = temp.concat(input[i + j]);
        }
        if(temp.includes("\n")) {
            if(temp.includes("[") || temp.includes("  ")) res[nCounter].push(temp.trim());
            nCounter++;
            continue;
        }
        
        if(!res[nCounter]) res[nCounter] = [];
        res[nCounter].push(temp.trim());
    }
    
    return {
        crates: res.slice(0, res[0].length - 1),
        instructions: input.split("\n").slice(res[0].length + 1).join(",")
    }
}

export async function cratesToStacks(input: string[][]): Promise<string[][]> {
    let res: string[][] = [];
    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < input[i].length; j++) {
            if(input[i][j] !== "") {
                if(!res[j]) res[j] = [];
                res[j].unshift(input[i][j]);
            }
        }
    }
    
    return res;
}

export async function runInstructions(inst: string, crates: string[][]): Promise<string[][]> {
    let split = inst.split(",");
    let copy = [...crates];
    for(let i = 0; i < split.length; i++) {
        let [_, amount, from, to] = split[i].match(/move (\d+) from (\d+) to (\d+)/).map(i => parseInt(i));
        let temp = [];
        for(let j = 0; j < amount; j++) {
            temp.unshift(copy[from - 1].pop());
        }
        copy[to - 1].push(...temp.reverse());
    }
    
    return copy;
}

export async function runInstructionsP2(inst: string, crates: string[][]): Promise<string[][]> {
    let split = inst.split(",");
    let copy = [...crates];
    for(let i = 0; i < split.length; i++) {
        let [_, amount, from, to] = split[i].match(/move (\d+) from (\d+) to (\d+)/).map(i => parseInt(i));
        let temp = [];
        for(let j = 0; j < amount; j++) {
            temp.unshift(copy[from - 1].pop());
        }
        copy[to - 1].push(...temp);
    }

    return copy;
}

export async function topOfStacks(crates: string[][]): Promise<string> {
    let res = "";
    for(let i = 0; i < crates.length; i++) {
        if(!crates[i]) continue;
        res = res.concat(crates[i][crates[i].length - 1][1]);
    }
    return res;
}

export async function solve(input: string): Promise<string> {
    let data = await readCrates(input);
    let stack = await cratesToStacks(data.crates as string[][]);
    let runInst = await runInstructions(data.instructions as string, stack);
    
    return await topOfStacks(runInst);
}

export async function solveP2(input: string): Promise<string> {
    let data = await readCrates(input);
    let stack = await cratesToStacks(data.crates as string[][]);
    let runInst = await runInstructionsP2(data.instructions as string, stack);
    
    return await topOfStacks(runInst);
}

(async function main() {
    let timeperf = await timePerf(solve, smallInput);
    let timeperf2 = await timePerf(solveP2, input);

    console.log(timeperf, "\n", timeperf2)
})()