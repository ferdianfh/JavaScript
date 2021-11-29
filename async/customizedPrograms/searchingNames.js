// * Case 3: Program 1 - Searching Names

const { people } = require("./database");

// main function
const filterName = (keyword) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filtrate = people.filter((value) =>
        value.toLowerCase().includes(keyword.toLowerCase())
      );
      const sorting = filtrate.sort();
      if (sorting.length !== 0) {
        resolve(sorting);
      } else {
        reject(new Error("The List Is Empty"));
      }
    }, 3000);
  });
};

// message
console.log("Filtering Name...");

// consuming promise
const resolvedValue = (resolve) => {
  console.log("Here is the list of name: ");
  console.log(resolve);
};
const rejectedValue = (reject) => {
  console.log(reject);
  console.log(
    "Keyword that you input is not match with the names in Database!"
  );
};
const finalValue = () => {
  setTimeout(() => {
    console.log("Do you want to try other keyword?");
  }, 1000);
};

filterName("di").then(resolvedValue).catch(rejectedValue).finally(finalValue);

// handling error with try-catch
const checkError = async (keyword) => {
  try {
    const filteredNames = await filterName(keyword);
    console.log("Here is the list of name: ");
    console.log(filteredNames);
  } catch (error) {
    console.log(error.stack);
    console.log("The keyword is not match!");
  } finally {
    setTimeout(() => {
      console.log("Do you want to try other keyword?");
    }, 1000);
  }
};
checkError("UM");
