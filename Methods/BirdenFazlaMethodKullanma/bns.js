const students = [
    {name: "can", point: 40},
    {name: "bensu", point: 60},
    {name: "volkan", point: 30},
    {name: "sevinc", point: 100},
    {name: "mahmmut", point: 20},
    {name: "furkan", point: 80},
    {name: "ayşe", point: 50},
    {name: "ali", point: 70},

];


const filtered = students.filter(student => student.point < 50);


const plusPoint = filtered.map(student => {
    return ` ${student.name} adlı öğrencinin yeni notu ${student.point + 15} `;
})

console.log(plusPoint);


const newNotes = students.filter(student => student.point < 50).map(student =>  ` ${student.name} adlı öğrencinin yeni notu ${student.point + 15} `);

console.log(newNotes);