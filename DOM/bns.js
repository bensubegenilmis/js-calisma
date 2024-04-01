// const hata= document.querySelector("p");

// const hata= document.querySelector(".error");

// const hata= document.querySelector("div.error");

// console.log(hata);

const hatalar = document.querySelectorAll("p");
console.log(hatalar);
console.log(hatalar[1]);

hatalar.forEach(hata =>
    {
        console.log(hata);
    })

const baslik = document.getElementById("can");
console.log(baslik);

const hatalarr=document.getElementsByClassName("error");
console.log(hatalarr);

const link = document.querySelector("a");
console.log(link.getAttribute("href"));
