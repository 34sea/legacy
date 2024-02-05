let nav = document.querySelector(".nav")

document.addEventListener("scroll", ()=>{
    if(window.scrollY>50){
        nav.style.position = "fixed"
        console.log("Ya")
    }else{
        nav.style.position = "static"
        console.log("Nop")
        console.log(window.scrollY)
    }
})