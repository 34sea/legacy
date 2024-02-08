let moreNot = window.document.querySelector(".moreNot")
let outrasNoticias = window.document.querySelector(".outrasNoticias")
let altura = 460
moreNot.addEventListener("click", ()=>{
    altura+=220
    outrasNoticias.style.maxHeight = altura+"px"
})