const fs = require("fs");

function exercise() {
  fs.readFile(__filename, () => {
    // * cb-1
    console.log("File read complete");

    process.nextTick(() => {
      // * cb-2
      console.log("nextTick inside readFile");
    });

    setImmediate(() => {
      // * cb-3
      console.log("setImmediate inside readFile");
    });
  });

  process.nextTick(() => {
    // * cb-4
    console.log("Outer nextTick");
  });

  console.log("Main script");
}

exercise();
