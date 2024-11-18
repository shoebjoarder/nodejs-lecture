function exercise() {
  Promise.resolve().then(() => {
    // * cb-1
    console.log("this is Promise.resolve 1");
  });

  setTimeout(() => {
    // * cb-2
    console.log("Timer executed 1");
  }, 0);

  process.nextTick(() => {
    // * cb-3
    console.log("This is process.nextTick 1");
    process.nextTick(() => {
      // * cb-4
      console.log("This is process.nextTick 2");
    }, 0);
  });
}

exercise();
