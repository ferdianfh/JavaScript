//  * Task 2

// gradeCalculator = (bahasa, english, maths, science) => {
//     if (bahasa === Number && english === Number && maths === Number && science === Number) {
//         return (bahasa + english + maths + science) / 4;
//     } else {
//         return `Isikan nilai dengan angka!`;
//     }
// }

// console.log(gradeCalculator(80, 80, 70, 90));

// example

const hitungNilai = (a, b, c, d) => {
    let nilai = a + b + c + d;
    let nilaiRata = parseInt(nilai / 4);
    
    if (nilaiRata >= 90 && nilaiRata <= 100) {
        return `Rata-rata = ${nilaiRata}\nGrade = A`
    } else if (nilaiRata >= 80 && nilaiRata <= 89) {
        return `Rata-rata = ${nilaiRata}\nGrade = B`
    } else if (nilaiRata >= 70 && nilaiRata <= 79) {
        return `Rata-rata = ${nilaiRata}\nGrade = C`
    } else if (nilaiRata >= 60 && nilaiRata <= 69) {
        return `Rata-rata = ${nilaiRata}\nGrade = D`
    } else {
        return `Rata-rata = ${nilaiRata}\nGrade = E`
    }
};


console.log(hitungNilai(70, 70, 70, 80));

// grade

// function gradeMaker (params) {
//     if (params >= 90 && params <= 100) {
//         return `Grade = A`
//     } else if (params >= 80 && params <= 89) {
//         return `Grade = B`
//     } else if (params >= 70 && params <= 79) {
//         return `Grade = C`
//     } else if (params >= 60 && params <= 69) {
//         return `Grade = D`
//     } else {
//         return `Grade = E`
//     }
// }

// console.log(gradeMaker(59))