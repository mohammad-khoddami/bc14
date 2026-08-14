var student =[
  {
    name : "ali",
    course :["html","css","js"],
  }
  {
    name : "nima",
    course :["c","sql","net","orm"],
  }
  {
    name : "afshin",
    course :["html","java"],
  }
]
for (var i=0;i<student.length;i++){
  var text = "";
  text += '${student[i].name'};
  for (var j=0;j<student[i].course.length;j++){
    text += '${student[i].course[j]'};
  }
}