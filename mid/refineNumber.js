// * Case 3

const { sortNumber } = require("./modules/callbacks");

const refineNumber = (firstValue, lastValue, dataArray) => {
  if (!Array.isArray(dataArray)) {
    return "Please input data with Array!";
  } else if (dataArray.length <= 5) {
    return "Array input must contain more than five elements!";
  } else if (firstValue > lastValue) {
    return "The Last Value must be greater than The First Value!";
  } else {
    const filtrate = dataArray.filter((value) => {
      if (value > firstValue && value < lastValue) {
        return true;
      } else {
        return false;
      }
    });

    const filteredValue = filtrate.sort(sortNumber);

    if (filteredValue.length === 0) {
      return "No Number Refined! Please check your input!";
    } else {
      return filteredValue;
    }
  }
};

console.log(refineNumber(6, 17, [45, 20, 21, 25, 67, 15]));
