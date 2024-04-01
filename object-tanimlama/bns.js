// const dersler=[
//     {isim:"matematik", puan:90},
//     {isim:"fizik", puan:80},
//     {isim:"kimya", puan:85},
// ]



let ogrenci = {
    ad:"Bensu",
    yas:25,
    email:"bensubegenilmis.com",
    sinif:12,
    dersler:[   
    {isim:"matematik", puan:90},
    {isim:"fizik", puan:80},
    {isim:"kimya", puan:85},],
    login:function()
    {
        console.log("Öğrenci giriş yaptı");
    },
    logout:function()
    {
        console.log("Öğrenci çıkış yaptı");
    },
    printLessons()
    {
        console.log(this.dersler);
        this.dersler.forEach(ders => {
            console.log(ders.isim, ders.puan);
        })
    }
};

console.log(ogrenci);
console.log(ogrenci.yas);


ogrenci.yas=20;
console.log(ogrenci.yas);
console.log(ogrenci["ad"]);


console.log(typeof ogrenci);



ogrenci.printLessons();

ogrenci.login();
ogrenci.logout();
