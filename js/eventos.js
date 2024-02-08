let eventosDestques = window.document.querySelectorAll(".eventosDestques")
let oEvento = window.document.querySelector(".oEvento")
let eventos = ["Apresentação do novo <b>presidente</b>", "Festa de comemoração da <b>Taça</b> do Moçambola", "Inauguração do novo <b>campo</b>"]

for(let i=0; i<eventosDestques.length; i++){
    eventosDestques[i].addEventListener("click", ()=>{
        oEvento.innerHTML = eventos[i]
    })
}