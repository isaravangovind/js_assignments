const { error } = require("console");

function fetchDataFromDatabase() {
  console.log("Fetching data from database...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = true;

      if (data) {
        resolve("Data fetched successfully!");
      } else {
        // setTimeout(() => {
        reject("Data not found!");
      }
    }, 3000);
  });
}

fetchDataFromDatabase()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
