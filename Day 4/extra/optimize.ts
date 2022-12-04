import { timePerf } from "../../util";
import { createReadStream } from "fs";

async function test(input: string): Promise<number> {
    let counter: number = 0;
    
    let readable = createReadStream(input, {
        encoding: "utf8",
        fd: null
    });

    let tempa: number[] = [];
    let temps = "";

    readable.on("readable", () => {
        let chunk: any;

        // check if "" "," "\n" "\r" "-"
        while(null !== (chunk = readable.read(1))) {

            if(chunk == "\r" || chunk == "\n") {
                if(tempa.length > 0) {
                    if(temps !== "") tempa.push(parseInt(temps));
                    if(Math.max(tempa[0], tempa[2]) <= Math.min(tempa[1], tempa[3])) {
                        counter++;
                    }
                    tempa = [];
                    temps = "";
                }
            }
            else if(chunk == "," || chunk == "-") {
                tempa.push(parseInt(temps));
                temps = "";
            } else {
                temps = temps.concat(chunk)
            }
        }
    });

    return new Promise((res, rej) => {
        readable.on("end", function() {
            res(counter);
        });        
    })
}

(async () => {
    console.log(await timePerf(test, "./input.txt"));
})()