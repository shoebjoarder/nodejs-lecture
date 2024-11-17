function getSumNum(a, b) {
  const customPromise = new Promise((resolve, reject) => {
    const sum = a + b;

    if (sum <= 5) {
      resolve("Let's go!!");
    } else {
      reject(new Error("Oops!.. Number must be less than 5"));
    }
  });

  return customPromise;
}

// consuming the promise with async/await
async function consumePromise() {
  try {
    const data = await getSumNum(1, 3);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

consumePromise();

// * Output
// Let's go!!
