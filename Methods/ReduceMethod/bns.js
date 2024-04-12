const points = [70, 75, 25, 35, 10, 80, 27];


const result = points.reduce((value, point) => {
    if (point > 50) {
        value++;
    }
    return value;

}, 0);

console.log(result);

const students = [
    {name: "can", point: 40},
    {name: "bns", point: 60},
    {name: "volkan", point: 30},
    {name: "sevinc", point: 100},
    {name: "ali", point: 40},
    {name: "can", point: 70},
    {name: "ayşe", point: 20},
    {name: "furkan", point: 100},
];

const canTotal= students.reduce((value,student)=>{
    if(student.name == "can")
    {
        value+=student.point;
    }
    return value;
},0);

console.log(canTotal);