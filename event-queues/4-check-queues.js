const fs = require("fs");

// * I/O Queue with readFile
function ioQueue() {
  fs.readFile(__filename, () => {
    // * cb-1
    console.log("This is readFile 1");
  });

  setTimeout(() => {
    // * cb-2
    console.log("Timer executed 1");
  }, 0);

  setImmediate(() => {
    // * cb-3
    console.log("this is setImmediate 1");
  });

  console.log("Main script");
}

ioQueue();
