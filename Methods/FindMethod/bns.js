const points = [70, 75, 25, 35, 10, 80, 27];

//find method ilk sağlayan koşulda diğerlerine bakmayı bırakır.

const highPoint = points.find(point => {
    return point >70
});

console.log(highPoint);