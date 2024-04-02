const button = document.querySelector("button");

// button.addEventListener("click", ()=>{
//     console.log("Tıklandı");
// })

const liElements = document.querySelectorAll("li");

liElements.forEach(eleman => {

    eleman.addEventListener("click", e=>
    {
        // console.log(e);
        // console.log(e.target);
        // console.log("Liye Tıklandı");
        // e.target.style.color="blue";

    })
    
});

const ul= document.querySelector("ul");
ul.addEventListener("click",e =>{
    // console.log(e);
    console.log(e.target);
    if(e.target.tagName ==="LI")
    {
        e.target.remove();
    }
})
//ul.remove();



liElements.forEach(eleman => {

    eleman.addEventListener("click", e=>
    {
        e.stopPropagation();
        console.log(e.target);
        // e.target.remove();
    })
    
});


button.addEventListener("click", ()=>{
   const li=document.createElement("li");
   li.textContent="Java";

   ul.append(li); // sona ekler
//    ul.prepend(li); //başa ekler
})
