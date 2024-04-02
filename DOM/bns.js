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
link.setAttribute("href", "https://www.w3schools.com/"); //linki günceller
link.textContent="w3schools"; //link adını değiştirir

const pDegeri= document.querySelector("p");
console.log(pDegeri.getAttribute("class"));
pDegeri.setAttribute("class", "errorrr");
pDegeri.setAttribute("style", "color:blue");