var students = ['sandy', 'sandy2'];
for (let i=0; i<students.length; i++){
  let student = students.pop();
  console.log(student);
}

for(let student of students){
  console.log(student);
}

students = ['Matt', 'Sarah', 'Susan'];
while(students.length > 0){
  let student = students.pop();
  console.log(student);
}

console.log(students);