export function timePerf(func: Function, ...args: any[]): Record<string, any> {
    let start = Date.now();
    let res = func(...args);
    let end = Date.now();

    return {
        res, timing: (end - start) / 1000
    }
}