const points = [ 70, 75, 25, 35, 10, 80, 27];

// const studentsPassed = points.filter(point => {
//     //return true;
//     return point > 50;

// })
// console.log(studentsPassed);

const studentsPassed = points.filter(point => point > 50);
console.log(studentsPassed);


const students = [
    {name: "mahmut", passed: true},
    {name: "bns", passed: false},
    {name: "volkan", passed: false},
    {name: "sevinc", passed: true},
];

const passingStudents = students.filter(student => {
    return student.passed
})

console.log(passingStudents);

const notpassingStudents = students.filter(student => {
    return !student.passed
})

console.log(notpassingStudents);