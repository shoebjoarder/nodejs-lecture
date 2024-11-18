// * Task Queue withs setTimeout
function taskQueue() {
  setTimeout(() => {
    // * cb-1
    console.log("Timer executed 1");
  }, 500);

  setTimeout(() => {
    // * cb-2
    console.log("Timer executed 2");
  }, 1000);

  setTimeout(() => {
    // * cb-3
    console.log("Timer executed 3");
  }, 0);

  console.log("Main script");
}

taskQueue();
