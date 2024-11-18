function exercise() {
  setTimeout(() => {
    // * cb-1
    console.log("Timer 1 executed");
  }, 100);

  setTimeout(() => {
    // * cb-2
    console.log("Timer 2 executed");
  }, 0);

  Promise.resolve().then(() => {
    // * cb-3
    console.log("Promise 1 resolved");
  });

  Promise.resolve().then(() => {
    // * cb-4
    console.log("Promise 2 resolved");
  });

  console.log("Main script");
}

exercise();
