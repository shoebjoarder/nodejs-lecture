function bonus() {
  process.nextTick(() => {
    // * cb-1
    console.log("this is process.nextTick 1");
  });
  process.nextTick(() => {
    // * cb-2
    console.log("this is process.nextTick 2");
    setTimeout(() => {
      // * cb-2
      console.log("Timer executed 1");
    }, 0);
  });
  process.nextTick(() => {
    // * cb-4
    console.log("this is process.nextTick 3");
  });

  Promise.resolve().then(() => {
    // * cb-5
    console.log("this is Promise.resolve 1");
  });
  Promise.resolve().then(() => {
    // * cb-6
    console.log("this is Promise.resolve 2");
    process.nextTick(() => {
      // * cb-7
      console.log("this is the inner next tick inside Promise then block");
    });
  });
  Promise.resolve().then(() => {
    // * cb-8
    console.log("this is Promise.resolve 3");
  });
}

bonus();
