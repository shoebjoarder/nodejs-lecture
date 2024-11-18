const fs = require("fs");

blockingExample = () => {
  let filePath = "sample.txt";

  console.log("Start reading file...");

  // * Blocking operation
  const data = fs.readFileSync(filePath, "utf8");
  if (data) {
    console.log("The file is open.");
  }

  console.log("Done reading file.");
};

// blockingExample();

// * Output
// Start reading file...
// The file is open.
// Done reading file.
