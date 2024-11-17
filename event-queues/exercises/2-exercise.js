function exercise() {
  setTimeout(() => {
    // * cb-1
    console.log("this is setTimeout 1");
  }, 0);

  setTimeout(() => {
    // * cb-2
    console.log("this is setTimeout 2");
    process.nextTick(() => {
      // * cb-3
      console.log("this is inner nextTick inside setTimeout");
    });
  }, 0);
  
  setTimeout(() => {
    // * cb-4
    console.log("this is setTimeout 3");
  }, 0);

  console.log("Main script");
}

exercise();
