import { bigInput } from "./biginput";
import { solveP2, readCrates, cratesToStacks, runInstructionsP2, topOfStacks } from "../Part1";
import { timePerf } from "../../util";

export async function readCratesV2(input: string): Promise<Record<string, string[][] | string>> {
    let split = input.split("\n");

    return {};
}

(async function main() {
    // let time = await timePerf(solveP2, bigInput);
    // console.log(time);
    let data = await readCrates(bigInput);
    console.log(data);
})()