const form = document.querySelector(".signupForm");
const username= document.querySelector("#username");

form.addEventListener("submit", e=>{
    e.preventDefault();
    // console.log("Form gönderildi");
    // console.log(username.value);
    console.log(form.username.value);

})


const username1= "bnsbns"; 
const pattern=/^[a-z]{6,10}$/;

// let sonuc = pattern.test(username1);
// //console.log(sonuc);

// if(sonuc)
// {
//     console.log("Başarılı");
// }
// else
// {
//     console.log("Başarısız");
// }

let sonuc= username1.search(pattern);
console.log(sonuc);

