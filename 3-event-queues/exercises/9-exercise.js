function exercise() {
  let count = 0;

  const interval = setInterval(() => {
    // * cb-1, cb-2
    console.log(`Interval executed ${++count}`);
    if (count === 2) clearInterval(interval);
  }, 100);

  Promise.resolve().then(() => {
    // * cb-3
    console.log("Promise resolved");
  });

  console.log("Main script");
}

exercise();
