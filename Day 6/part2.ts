import { input } from "./input";
import { solve } from "./part1";
import { timePerf } from "../util";

(async function main() {
    let perf = await timePerf(solve, input, 14);

    console.log(perf);
})()