//  * Case 2

const getMonth = (callback) => {
  setTimeout(() => {
    let error = false; // error status
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (!error) {
      // condition based error status
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found", []));
    }
  }, 4000);
};

// message
console.log("Displaying Data...");

// it will display value based on array data
const displayData = (value) => {
  return value;
};

// it will display data based on error status
const displayMonth = (errorMessage, data) => {
  // condition based error message
  if (errorMessage === null) {
    let months = data.map(displayData);
    console.log(months);
  } else {
    console.log(errorMessage);
  }
};
getMonth(displayMonth);
