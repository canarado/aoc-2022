import { solve, chunkIntoThirds } from "../Challenge2";
import { readInput } from "../Challenge1";
import { input } from "./extra.input";

let startReadInput = Date.now();
let read = readInput(input);
let endReadInput = Date.now();

let startChunkInput = Date.now();
let chunked = chunkIntoThirds(read);
let endChunkInput = Date.now();

let startSolve = Date.now();
let solved = solve(chunked);
let endSolve = Date.now();

let convertTime = (endReadInput - startReadInput) / 1000;
let chunkTime = (endChunkInput - startChunkInput) / 1000;
let solveTime = (endSolve - startSolve) / 1000;

let totalRuntime = convertTime + chunkTime + solveTime;

console.log(
`convert input time: ${(endReadInput - startReadInput) / 1000}s
chunk input time: ${(endChunkInput - startChunkInput) / 1000}s
solve time: ${(endSolve - startSolve) / 1000}s

total runtime: ${totalRuntime}

answer: ${solved}
`)
