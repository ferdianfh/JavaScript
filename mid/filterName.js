// * Case 2

const {displayName} = require('./modules/callbacks');

const filterName = (keyword, amount, callback) => {
    const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deidre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

    const filtrate = name.filter(
        (value) => value.toLowerCase().includes(keyword.toLowerCase())
    );

    const slash = filtrate.slice(0, amount).sort();

    return callback(slash);
}

console.log(filterName('AN', 3, displayName));