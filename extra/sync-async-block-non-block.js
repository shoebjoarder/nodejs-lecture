const fs = require("fs");

blockingExample = () => {
    let filePath = "sample.txt";
    
    console.log("Start reading file...");
    
    // * Blocking operation
    const data = fs.readFileSync(filePath, "utf8");
    
    console.log(`File content: ${data.slice(0, 20)}...`);
    
    console.log("Done reading file.");
};

// blockingExample();

// * Output
// Start reading file...
// File content: ﻿Lorem ipsum dolor s...'
// Done reading file.

// const fs = require("fs");

nonBlockingExample = () => {
  let filePath = "sample.txt";

  console.log("Starting to read the file");

  // * Non-blocking operation
  fs.readFile(filePath, "utf8", (_, data) => {
    console.log(`File content: ${data.slice(0, 20)}...`);
  });

  console.log("File read initiated...");
};

// nonBlockingExample();

// * Output
// Starting to read the file
// File read initiated...
// File content: ﻿Lorem ipsum dolor s...


syncFunction = () => {
  console.log("Start");

  console.log(`Synchronous function`);

  console.log("End");
};

// syncFunction();

asyncNonBlocking = () => {
  console.log("Start");

  setTimeout(() => {
    console.log(`Asynchronous function non-blocking`);
  }, 1000);

  console.log("End");
};

// asyncNonBlocking()

asyncBlocking = () => {
  console.log("Start");

  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Asynchronous function blocking`);
      resolve();
    }, 1000);
  });

  console.log("End");
};

//   asyncBlocking();


// * Promises and nextTick

Promise.resolve().then(() => {
  // * cb-1
  console.log("This is Promise.resolve 1");
});

process.nextTick(() => {
  // * cb-2
  console.log("This is process.nextTick 1");
});

console.log("Main script");

// Timer Queue
// setTimeout(() => {
//   // * cb-1
//   console.log("Timer executed 1");
// }, 500);

// setTimeout(() => {
//   // * cb-2
//   console.log("Timer executed 2");
// }, 1000);

// setTimeout(() => {
//   // * cb-3
//   console.log("Timer executed 3");
// }, 0);

// console.log("Main script");

// const fs = require("fs");

// fs.readFile(__filename, () => {
//   // * cb-1
//   console.log("this is readFile 1");
// });

// Promise.resolve().then(() => {
//   // * cb-3
//   console.log("this is Promise.resolve 1");
// });

// process.nextTick(() => {
//   // * cb-2
//   console.log("this is process.nextTick 1");
// });

// console.log("Main script");
