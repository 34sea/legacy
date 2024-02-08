let nav = document.querySelector(".nav")
let pesquisar = window.document.querySelector(".pesquisar")
let barraPesquisa = window.document.querySelector(".barraPesquisa")
let abrPe = true

document.addEventListener("scroll", ()=>{
    console.log(window.pageYOffset)
    if(window.pageYOffset>=50){
        nav.style.position = "fixed"
        barraPesquisa.style.position = "fixed"
        console.log("Ya")
    }else{
        nav.style.position = "static"
        barraPesquisa.style.position = "static"
        console.log("Nop")

    }
})




pesquisar.addEventListener("click", ()=>{
    if(abrPe){
        barraPesquisa.style.height = "40px"
        barraPesquisa.style.visibility = "visible"
        abrPe=false
    }else{
        barraPesquisa.style.height = "0px"
        abrPe=true
        barraPesquisa.style.visibility = "hidden"
    }
})

//Slide

let slide = window.document.querySelector(".slide")

let esq = window.document.querySelector(".esq")

let dir = window.document.querySelector(".dir")

let linksImages = ["../imgs/BannersNoticias/b1.png", "../imgs/BannersNoticias/MAMBAS.webp"]

let textoSlide = ["Moçambique anuncia a construção de um novo estádio com capcidade de até 900 torcedores", "Moçambique integra o grupo B e vai enfrentar Cabo Verde, Gana e Egipto"]
let tituloSlide = window.document.querySelector(".tituloSlide")

let qu = false

esq.addEventListener("click", ()=>{
    slide.style.backgroundSize = "0%"
    if(qu){
        slide.style.backgroundImage = `url(${linksImages[0]})`
        tituloSlide.textContent = textoSlide[1]
        slide.style.backgroundSize = "100%"
        qu=false
    }else{
        slide.style.backgroundImage = `url(${linksImages[1]})`
        tituloSlide.textContent = textoSlide[0]
        qu=true
        slide.style.backgroundSize = "100%"
    }
    
})


dir.addEventListener("click", ()=>{
    slide.style.backgroundSize = "0%"
    if(qu){
        slide.style.backgroundImage = `url(${linksImages[0]})`
        tituloSlide.textContent = textoSlide[0]
        slide.style.backgroundSize = "100%"
        qu=false
    }else{
        slide.style.backgroundImage = `url(${linksImages[1]})`
        tituloSlide.textContent = textoSlide[1]
        slide.style.backgroundSize = "100%"
        qu=true
    }
})