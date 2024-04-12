const points = [70, 75, 25, 35, 10, 80, 27];

const arrayIndex = points.findIndex(point => point == 35);
points[arrayIndex] = 45;
console.log(points);


const students = [
    {name: "can", point: 40},
    {name: "bns", point: 60},
    {name: "volkan", point: 30},
    {name: "sevinc", point: 100},

];


const objectIndex =students.findIndex ( student => student.name == "volkan");
students[objectIndex].name = "mahmut";
console.log(students);


const objectIndexnumber =students.findIndex ( student => student.name == "bns");
students[objectIndexnumber].point = 70;
console.log(students);
