const fs = require("fs");

nonBlockingExample = () => {
  let filePath = "sample.txt";

  console.log("Starting to read the file");

  // * Non-blocking operation
  let rs = fs.createReadStream(filePath);
  rs.on("open", () => {
    console.log("The file is open.");
  });
  console.log("File read initiated...");
};

// nonBlockingExample();

// * Output
// Starting to read the file
// File read initiated...
// The file is open.
