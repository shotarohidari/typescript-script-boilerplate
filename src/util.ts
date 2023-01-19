export const sleep = (ms:number=1000) => {
    return new Promise<void>((resolve,reject) => {
        setTimeout(() => {
            resolve()
        }, ms);
    });
}