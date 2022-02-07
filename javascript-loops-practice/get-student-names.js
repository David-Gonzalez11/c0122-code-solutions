/* exported getStudentNames */
function getStudentNames(students) {
  var studentsNames = [];
  for (var i = 0; i < students.length; i++) {
    var studentName = students[i].name;
    studentsNames.push(studentName);
  }
  return studentsNames;
}
