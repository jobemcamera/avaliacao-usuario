const botao = document.getElementById("enviar")
const conteudoMensagem = document.getElementById("caixa-mensagem")
const checkEstrela = document.querySelector(".estrela")

botao.addEventListener("click", mostrar)

function mostrar() {
    if (document.getElementById("one").checked) {
        document.getElementById("resultado-estrela").innerHTML = "1/5"
        
    } else if (document.getElementById("two").checked) {
        document.getElementById("resultado-estrela").innerHTML = "2/5"

    } else if (document.getElementById("three").checked) {
        document.getElementById("resultado-estrela").innerHTML = "3/5"

    } else if (document.getElementById("four").checked) {
        document.getElementById("resultado-estrela").innerHTML = "4/5"

    } else if (document.getElementById("five").checked) {
        document.getElementById("resultado-estrela").innerHTML = "5/5"
        
    } else 
        alert("Marque uma estrela")

    document.getElementById("resultado-texto").innerHTML = conteudoMensagem.value;
}
