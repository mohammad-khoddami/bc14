var students = [
  { name: "Ali", scores: [15, 13, 17, 14] },
  {
    name: "Amir",
    scores: [19, 15, 13, 14],
  },
  {
    name: "Mehran",
    scores: [10, 8, 12, 15],
  },
];

function avrage(students) {
  for (var i = 0; i < students.length; i++) {
    var sum = 0;
    var count = 0;
    for (var j = 0; j < students[i].scores.length; j++) {
      sum = sum + students[i].scores[j];
      count++;
    }
    var avg = sum / count;
    console.log(students[i].name + " : " + avg);
  }
}
avrage(students);
