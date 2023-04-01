//*Si corres en local, recuerda cambiar: window.setTimeout(...) --> setTimeout(...)
function doTask1() {
    return new Promise((resolve) => {
        window.setTimeout(() => resolve('Task 1'), 300);
    })
  }
  
function doTask2() {
    return new Promise((resolve) => {
        window.setTimeout(() => resolve('Task 2'), 300);
    })
}
  
function doTask3() {
    return new Promise((resolve) => {
        window.setTimeout(() => resolve('Task 3'), 300);
    })
}

function runCode() {
    const strings = [];
    return doTask1()
      .then(rta => {
        strings.push(rta);
        return doTask2();
      })
      .then(rta => {
        strings.push(rta);
        return doTask3();
      })
      .then(rta => {
        strings.push(rta);
        return strings;
      })
}

runCode()
.then(response => console.log(response));