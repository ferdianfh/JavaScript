//  * Case 3

let printSegitiga = 5;
let pattern = ``;

// validate input
if (typeof printSegitiga === `number`) {
    // outer loop will iterate vertically
    for (i = 1; i <= printSegitiga; i++) {
        // inner loop will iterate horizontally
        for (j = 1; j <= printSegitiga - i + 1; j++) {
          pattern += `${j} `;
        }
        pattern += `\n`;
    }
    console.log(pattern);
} else {
    console.log(`Please input number only!`);
}


// * Case 3: Pattern in function

printSegitiga = (num) => {
    let pattern = ``;

    if (typeof num === "number") {
        for (i = 1; i <= num; i++) {
            for (j = 1; j <= num - i + 1; j++) {
                pattern += `${j} ` ;
            }
            pattern += `\n`;
        }
    } else {
        return `Data harus number!`;
    }
    
    return pattern;
}

console.log(printSegitiga(5)); 