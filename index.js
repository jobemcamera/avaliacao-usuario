const botao = document.getElementById("enviar")
const conteudoMensagem = document.getElementById("caixa-mensagem")
const checkEstrela = document.getElementById("resultado-estrela")

botao.addEventListener("click", mostrar)

function mostrar() {
    if (document.getElementById("one").checked) {
        checkEstrela.innerHTML = "1/5"
        
    } else if (document.getElementById("two").checked) {
        checkEstrela.innerHTML = "2/5"

    } else if (document.getElementById("three").checked) {
        checkEstrela.innerHTML = "3/5"

    } else if (document.getElementById("four").checked) {
        checkEstrela.innerHTML = "4/5"

    } else if (document.getElementById("five").checked) {
        checkEstrela.innerHTML = "5/5"
        
    } else 
        alert("Marque uma estrela")

    document.getElementById("resultado-texto").innerHTML = conteudoMensagem.value;
}
