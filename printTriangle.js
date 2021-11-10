//  * Task 3

//  * Pattern: Triangle
// let number = 5;
// let star = "";


// for (i = 1; i <= number; i++) {
//   for (j = 1; j <= number-i+1; j++) {
//     star += j;
//   }
//   star += "\n";
// }

// console.log(star);


// * Pattern in function
printSegitiga = (num) => {
    let pattern = '';

    for (i = 1; i <= num; i++) {
        // inner loop will print horizontal
        for (j = 1; j <= num - i + 1; j++) {
            pattern += j;
        }
        pattern += '\n';
    }

    return pattern;
}

console.log(printSegitiga(6));

