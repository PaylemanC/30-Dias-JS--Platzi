function getStudentAverage(students) {
  let finalAverages = {
    classAverage: 0,
    students: []
  }

  for (let student of students) {
    const finalGrade = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
    const person = {
      name: student.name,
      average: Number(finalGrade.toFixed(2))
    }
    finalAverages.students.push(person);
    finalAverages.classAverage += finalGrade;
  }
  finalAverages.classAverage = Number((finalAverages.classAverage / finalAverages.students.length).toFixed(2));

  return finalAverages;
}


console.log(getStudentAverage([
  {
      name: "Pedro",
      grades: [90, 87, 88, 90],
    },
    {
      name: "Jose",
      grades: [99, 71, 88, 96],
    },
    {
      name: "Maria",
      grades: [92, 81, 80, 96],
    }
])); 
/* {
  classAverage: 88.17,
  students: [
    {
      name: "Pedro",
      average: 88.75
    },
    {
      name: "Jose",
      average: 88.5
    },
    {
      name: "Maria",
      average: 87.25
    }
  ]
}*/