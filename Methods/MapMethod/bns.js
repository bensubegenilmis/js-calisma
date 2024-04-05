const points = [ 70, 75, 25, 35, 10, 80, 27];

const  newPoints = points.map(point => {
    return point +10;
});

console.log(newPoints);


const students = [
    {name: "mahmut", point: 40},
    {name: "bns", point: 60},
    {name: "volkan", point: 30},
    {name: "sevinc", point: 100},
];


const newStudentsPoints = students.map( student => {
    if(student.point < 50)
    {
        //return {name : student.name, point: student.point + 15 }
        student.point += +15;
        return student;
    }
    else
    {
        return student
    }
})

console.log(newStudentsPoints);