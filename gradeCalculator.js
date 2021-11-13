//  * Task 2

gradeCalculator = (bahasa, english, maths, science) => {
    const subjects = bahasa + english + maths + science;
    const gradeMedian = (subjects / 4);
    
    if (typeof subjects !== `number` || Number.isNaN(subjects)) {
        return `You must enter all subjects with number!`;
    } else {
        if (gradeMedian >= 90 && gradeMedian <= 100) {
            return `Rata-rata = ${gradeMedian}\nGrade = A`;
        } else if (gradeMedian >= 80 && gradeMedian <= 89) {
            return `Rata-rata = ${gradeMedian}\nGrade = B`;
        } else if (gradeMedian >= 70 && gradeMedian <= 79) {
            return `Rata-rata = ${gradeMedian}\nGrade = C`;
        } else if (gradeMedian >= 60 && gradeMedian <= 69) {
            return `Rata-rata = ${gradeMedian}\nGrade = D`;
        } else if (gradeMedian >= 0 && gradeMedian <= 59){
            return `Rata-rata = ${gradeMedian}\nGrade = E`;
        } else {
            return `You're not very bright, are you?`;
        }
    }
}

console.log(gradeCalculator(80, 84, 77, 96));

// * example

// const hitungNilai = (a, b, c, d) => {
//     let nilai = a + b + c + d;
//     let nilaiRata = parseInt(nilai / 4);

//     // validasi jumlah nilai yang dimasukkan
//     if (typeof nilai !== `number` || Number.isNaN(nilai)) {
//         return `Please enter grade with number!`;
//     } else {
//         if (nilaiRata >= 90 && nilaiRata <= 100) {
//             return `Rata-rata = ${nilaiRata}\nGrade = A`;
//         } else if (nilaiRata >= 80 && nilaiRata <= 89) {
//             return `Rata-rata = ${nilaiRata}\nGrade = B`;
//         } else if (nilaiRata >= 70 && nilaiRata <= 79) {
//             return `Rata-rata = ${nilaiRata}\nGrade = C`;
//         } else if (nilaiRata >= 60 && nilaiRata <= 69) {
//             return `Rata-rata = ${nilaiRata}\nGrade = D`;
//         } else if (nilaiRata >= 0 && nilaiRata <= 59){
//             return `Rata-rata = ${nilaiRata}\nGrade = E`;
//         } else {
//             return `You're not very bright, are you?`;
//         }
//     }
// };


// console.log(hitungNilai(70, 70, true, 86));

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