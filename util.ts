export async function timePerf(func: Function, ...args: any[]): Promise<Record<string, any>> {
    let start = Date.now();
    let res = await func(...args);
    let end = Date.now();

    return {
        res, timing: (end - start) / 1000
    }
}