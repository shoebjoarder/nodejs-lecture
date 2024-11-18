// router.get("/sandwiches/:id", (reg, res) => {
//   const sandwichId = req.params.id;
//   database.findOneById(sandwichId).then((sandwich) => {
//     console.log("lunch time");
//     res.json(sandwich);
//   });
//   console.log("searching for sandwich");
// });

function fetchData(url) {
  console.log("Request started...");

  // Return a new promise
  return new Promise((resolve, reject) => {
    // Simulate a delay (e.g., 2 seconds) to mimic a server request
    setTimeout(() => {
      // Randomly decide if the request is successful or fails
      const success = Math.random() > 0.5; // 50% chance of success

      if (success) {
        resolve(`Data fetched successfully from ${url}`);
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 2000); // 2-second delay
  });
}

async function getData() {
  try {
    // Await the fetchData promise
    const result = await fetchData("https://api.example.com/data");
    console.log("Promise state: fulfilled");
    console.log("Success: " + result);
  } catch (error) {
    console.log("Promise state: rejected");
    console.log("Error: " + error.message);
  }
}

getData();

console.log("Promise state: pending");

// Using the promise
const promise = fetchData("https://api.example.com/data");

// Initially, the promise is in a "pending" state
console.log("Promise state: pending");

// Handling the promise using .then() and .catch()
promise
  .then((result) => {
    console.log("Promise state: fulfilled");
    console.log("Success: " + result);
  })
  .catch((error) => {
    console.log("Promise state: rejected");
    console.log("Error: " + error.message);
  });

// * Output
// Request started...
// Promise state: pending

// * (if promise fulfilled)
// Promise state: fulfilled
// Success: Data fetched successfully from https://api.example.com/data

// * (if promise rejected)
// Promise state: rejected
// Error: Failed to fetch data
