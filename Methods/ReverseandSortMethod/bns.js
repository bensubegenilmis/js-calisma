const names = ["can", "bns", "volkan", "sevinc","ali"];

names.sort();  //alfabetik sıraya sokar
console.log(names);

names.reverse(); //listenin sondaki terimini baştaki yapar
console.log(names);


const points = [70, 75, 25, 3, 10, 80, 27];


// points.sort();  //sayıları küçükten byüğe sıralar ama ilk indexteki sayıya göre [10, 25, 27, 3, 70, 75, 80]
// console.log(points);

// points.reverse(); // listeyi tersine çevirir
// console.log(points);

points.sort((a,b) => b-a);  //büyükten küçüğe sıralar
console.log(points);

points.sort((a,b) => a-b); //Küçükten büyüğe sıralar
console.log(points);



const students = [
    {name: "can", point: 40},
    {name: "bns", point: 60},
    {name: "volkan", point: 30},
    {name: "sevinc", point: 100},

];

// students.sort((a,b) => {
//     if(a.point > b.point) 
//     {
//         return -1;
//     }
//     else if(b.point > a.point) 
//     {
//         return 1;
//     }
//     else
//     {
//         return 0;
//     }
// });

students.sort((a,b) => b.point - a.point);  // üstteki kodun kısaltılmış hali b-a ise -1 dönüyor değilse 1 hiçbiri ise 0

console.log(students);
