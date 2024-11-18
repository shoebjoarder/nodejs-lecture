const fs = require("fs");

function exercise() {
  setTimeout(() => {
    // * cb-1
    console.log("Timer executed 1");
  }, 500);

  fs.readFile(__filename, () => {
    // * cb-2
    console.log("This is readFile 1");
  });

  process.nextTick(() => {
    // * cb-3
    console.log("This is process.nextTick 1");
    setTimeout(() => {
      // * cb-4
      console.log("Timer executed 2");
    }, 0);
  });
}

exercise();
