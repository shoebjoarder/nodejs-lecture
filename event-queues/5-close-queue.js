const fs = require("fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
  // * cb-1
  console.log("This is the close event callback");
});

Promise.resolve().then(() => {
  // * cb-2
  console.log("This is Promise.resolve 1");
});

setImmediate(() => {
  // * cb-3
  console.log("This is setImmediate 1");
});

console.log("Main script");

// * I/O Queue with readFile
function closeQueue() {
  const readableStream = fs.createReadStream(__filename);
  readableStream.close();

  readableStream.on("close", () => {
    // * cb-1
    console.log("This is the close event callback");
  });

  Promise.resolve().then(() => {
    // * cb-2
    console.log("This is Promise.resolve 1");
  });

  setImmediate(() => {
    // * cb-3
    console.log("This is setImmediate 1");
  });

  console.log("Main script");
}

closeQueue();
