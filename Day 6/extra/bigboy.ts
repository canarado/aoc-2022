import { bigInput } from "./biginput";
import { input } from "../input";
import { solve } from "../part1";
import { timePerf } from "../../util";

export function solve2(input: string, checkForPacket: number): number {
    let ans = 0;

    for(let i = 0; i < input.length; i++) {
        if(areDiffValues(...Array(checkForPacket).map((v, ind) => v = input[ind + 1]))) {
            ans = i + checkForPacket;
            break;
        }
    }

    return ans;
}

function areDiffValues(...args: any[]): boolean {
    let t = args.filter((v, ind, s) => s.indexOf(v) == ind);

    if(t.length < args.length) return false;
    else return true;
}

(async function main() {
    let perf = await timePerf(solve, bigInput, 14);

    console.log(perf);
})()