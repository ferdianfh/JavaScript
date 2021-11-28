// * Case 3: Program 2 - Ice Cream Factory

const stocks = {
  flavours: [
    "Strawberry",
    "Chocolate",
    "Vanilla",
    "Matcha",
    "Salted Egg",
    "Wasabi",
    "Honey",
    "Red Bean",
    "Taro",
    "Sweet Potato",
    "Jasmine Flower",
    "Squid Ink",
  ],
  toppings: [
    "Crackers",
    "Squid",
    "Ketchup",
    "Anchovies",
    "Dried Seaweed",
    "Rendang",
    "Terasi",
    "Takoyaki",
    "Bacon",
    "Scrumbled Eggs",
  ],
};

const order = (flavour, topping) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pickedFlavour = stocks.flavours.filter((value) =>
        value.toLowerCase().includes(flavour.toLowerCase())
      );
      const pickedTopping = stocks.toppings.filter((value) =>
        value.toLowerCase().includes(topping.toLowerCase())
      );
      const combine = pickedFlavour.concat(pickedTopping);

      if (combine.length >= 2) {
        resolve(combine);
      } else {
        reject(
          new Error("Flavour or Topping you pick currently out of stock.")
        );
      }
    }, 3000);
  });
};

// message
console.log("Ordering Ice Cream...");

// making ice cream
const resolvedValue = (resolve) => {
  console.log(`${resolve[0]} and ${resolve[1]} are ready! Good choice!`);
  setTimeout(() => {
    console.log("Start making ice cream...");
  }, 2000);
  setTimeout(() => {
    console.log(`Mix ${resolve[0]} and other ingredients. Shake it off!`);
  }, 3000);
  setTimeout(() => {
    console.log(`Put ${resolve[1]} as toppings!`);
  }, 4000);
  setTimeout(() => {
    console.log(
      `${resolve[0]} Ice Cream with ${resolve[1]} is ready to serve!`
    );
  }, 5000);
};
const rejectedValue = (reject) => {
  console.log(reject);
};
const finalValue = () => {
  setTimeout(() => {
    console.log("Do you want to try other flavours?");
  }, 6000);
};

order("lavender", "squid")
  .then(resolvedValue)
  .catch(rejectedValue)
  .finally(finalValue);

// handling error with try-catch
const checkError = async () => {
  try {
    const checkingStock = await order("choco", "raisin");
    console.log(checkingStock);
    console.log("Stock is ready. You can order the Ice Cream!");
  } catch (error) {
    console.log(error.message);
  } finally {
    setTimeout(() => {
      console.log("Do you want to try other keyword?");
    }, 1000);
  }
};
checkError();
