import { input } from "./Challenge.input";
import { splitInputIntoGroupsByNewline, reduceCalories } from "./Challenge1";

let caloriesPerElf = reduceCalories(splitInputIntoGroupsByNewline(input));

function caloriesOfTopXElves(numberOfElves: number) {
    let sum = 0;
    for(let i = 0; i < numberOfElves; i++) {
        let top = Math.max(...caloriesPerElf);
        sum += top;
        caloriesPerElf.splice(caloriesPerElf.indexOf(top), 1);
    }
}
