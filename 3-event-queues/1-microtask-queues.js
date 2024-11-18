// * Promises and nextTick
function microtaskQueue() {
  Promise.resolve().then(() => {
    // * cb-1
    console.log("This is Promise.resolve 1");
  });

  process.nextTick(() => {
    // * cb-2
    console.log("This is process.nextTick 1");
  });

  console.log("Main script");
}

microtaskQueue();
