function exercise() {
  setImmediate(() => {
    // * cb-1
    console.log("setImmediate 1");
  });

  Promise.resolve().then(() => {
    // * cb-2
    console.log("Promise 1 resolved");
    setImmediate(() => {
      // * cb-3
      console.log("setImmediate 2");
    });
  });

  setTimeout(() => {
    // * cb-4
    console.log("Timeout executed");
  }, 0);

  console.log("Main script");
}

exercise();
