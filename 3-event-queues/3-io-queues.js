const fs = require("fs");

// * I/O Queue with readFile
function ioQueue() {
  fs.readFile(__filename, () => {
    // * cb-1
    console.log("This is readFile 1");
  });

  Promise.resolve().then(() => {
    // * cb-2
    console.log("This is Promise.resolve 1");
  });

  process.nextTick(() => {
    // * cb-3
    console.log("This is process.nextTick 1");
  });

  console.log("Main script");
}

ioQueue();
