//* Case 2

let mtk = 80;
let bahasaIndonesia = 90;
let bahasaInggris = 89;
let ipa = 69;

const totalScore = mtk + bahasaIndonesia + bahasaInggris + ipa;
const averageScore = totalScore / 4;

// validate total score
if (typeof totalScore !== "number") {
  console.log("Please insert your score with number!");
} else if (Number.isNaN(totalScore)) {
  console.log("Score is not complete. Please insert score from all subjects!");
} else {
  console.log(`Rata-rata = ${averageScore}`);
}

// validate type of grade
if (averageScore >= 90 && averageScore <= 100) {
  console.log("Grade = A");
} else if (averageScore >= 80 && averageScore <= 89) {
  console.log("Grade = B");
} else if (averageScore >= 70 && averageScore <= 79) {
  console.log("Grade = C");
} else if (averageScore >= 60 && averageScore <= 69) {
  console.log("Grade = D");
} else if (averageScore >= 0 && averageScore <= 59) {
  console.log("Grade = E");
} else {
  console.log("I am sorry you couldn't make it");
}

//* Case 2: Grade in function

const gradeCalculator = (bahasa, english, maths, science) => {
  const subjects = bahasa + english + maths + science;
  const averageScore = subjects / 4;

  if (typeof subjects !== "number") {
    return "Please insert your score with number!";
  } else if (Number.isNaN(subjects)) {
    return "Score is not complete. You must insert all subjects!";
  } else {
    if (averageScore >= 90 && averageScore <= 100) {
      return `Rata-rata = ${averageScore} \nGrade = A`;
    } else if (averageScore >= 80 && averageScore <= 89) {
      return `Rata-rata = ${averageScore} \nGrade = B`;
    } else if (averageScore >= 70 && averageScore <= 79) {
      return `Rata-rata = ${averageScore} \nGrade = C`;
    } else if (averageScore >= 60 && averageScore <= 69) {
      return `Rata-rata = ${averageScore} \nGrade = D`;
    } else if (averageScore >= 0 && averageScore <= 59) {
      return `Rata-rata = ${averageScore} \nGrade = E`;
    } else {
      return "You are not very bright, are you?";
    }
  }
};

console.log(gradeCalculator(80, 84, 96, 90));
