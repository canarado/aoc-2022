import { timePerf } from "../util";
import { input } from "./input";

export function solve(input: string, checkForPacket: number): number {
    let rotating: string[] = [];
    let ans = 0;

    let s = Date.now();
    for(let i = 0; i < input.length; i++) {
        if(rotating.length == checkForPacket) rotating.shift();
        rotating.push(input[i]);

        if(rotating.length == checkForPacket) {
            let t = rotating.filter((v, ind, s) => s.indexOf(v) == ind);
            if(t.length < checkForPacket) continue;
            else {
                ans = i + 1;
                break;
            }
        }
    }
    let e = Date.now();
    console.log('actual solve time fr', (e - s) / 1000);

    return ans;
}