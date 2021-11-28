// * Case 4

import fetch from "node-fetch";

// filtering data with forEach
const filtering = (value) => {
  console.log(value.name);
};

// main function
const getDatafromServer = async () => {
  try {
    const dataAPI = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((dataJson) => {
        dataJson.forEach(filtering);
      });
    return dataAPI;
  } catch (error) {
    console.log(error.name);
    console.log(error.stack);
    console.log("There's something wrong with the program!");
  } finally {
    setTimeout(() => {
      console.log("Do you want to find other data?");
    }, 1500);
  }
};
getDatafromServer();

// message
console.log("Requesting data from server...");
