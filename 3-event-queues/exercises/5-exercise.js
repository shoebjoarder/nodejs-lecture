function exercise() {
  process.nextTick(() => {
    // * cb-1
    console.log("this is process.nextTick 1");
  });

  setImmediate(() => {
    // * cb-2
    console.log("this is setImmediate 1");
  });

  process.nextTick(() => {
    // * cb-3
    console.log("this is process.nextTick 2");
    process.nextTick(() => {
      // * cb-4
      console.log("this is the inner next tick inside next tick");
    });
  });

  Promise.resolve().then(() => {
    // * cb-5
    console.log("this is Promise.resolve 1");
  });
}

exercise();
