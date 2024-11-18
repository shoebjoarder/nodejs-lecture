function addFunction(a, b, callback) {
  callback(a + b);
}

console.log("before");

addFunction(1, 2, (result) => {
  console.log(`Result: ${result}`);
});

console.log("after");
