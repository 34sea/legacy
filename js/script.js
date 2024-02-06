let nav = document.querySelector(".nav")

document.addEventListener("scroll", ()=>{
    console.log(window.pageYOffset)
    if(window.pageYOffset>=50){
        nav.style.position = "fixed"
        console.log("Ya")
    }else{
        nav.style.position = "static"
        console.log("Nop")

    }
})