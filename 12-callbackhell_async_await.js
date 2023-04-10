//*Si corres en local, recuerda cambiar: window.setTimeout(...) --> setTimeout(...)
async function doTask1() {
    return new Promise((resolve) => {
        window.setTimeout(() => resolve('Task 1'), 300);
    })
}
async function doTask2() {
    return new Promise((resolve) => {
        window.setTimeout(() => resolve('Task 2'), 300);
    })
}  
async function doTask3() {
    return new Promise((resolve) => {
        window.setTimeout(() => resolve('Task 3'), 300);
    })
}

async function runCode() {
    const strings = [];
    strings.push(await doTask1());
    strings.push(await doTask2());
    strings.push(await doTask3());
    return strings;
}

runCode();