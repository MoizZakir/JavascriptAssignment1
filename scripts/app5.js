let marks = [80, 70, 90, 60, 85];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}

let average = sum / marks.length;

console.log("The average marks is " + average);

if (average < 60) {
  console.log("The grade is F");
} else if (average < 70) {
  console.log("The  grade is D");
} else if (average < 80) {
  console.log("The  grade is C");
} else if (average < 90) {
  console.log("The  grade is B");
} else {
  console.log("The  grade is A");
}
