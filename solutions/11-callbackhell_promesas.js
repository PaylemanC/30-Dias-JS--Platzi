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
.then(response => console.log(response)); //["Task 1", "Task 2", "Task 3"]


/*function doTask1(callback) {
  window.setTimeout(() => callback('Task 1'), 300);
}

function doTask2(callback) {
  window.setTimeout(() => callback('Task 2'), 300);
}

function doTask3(callback) {
  window.setTimeout(() => callback('Task 3'), 300);
}

function runCode() {
  const strings = [];
  return new Promise((resolve) => {
    doTask1((rta1) => {
      strings.push(rta1);
      doTask2((rta2) => {
        strings.push(rta2);
        doTask3((rta3) => {
          strings.push(rta3);
          resolve(strings);
        })
      })
    })
  })
}*/