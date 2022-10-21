const botao = document.getElementById("enviar")
const conteudoMensagem = document.getElementById("caixa-mensagem")
const checkEstrela = document.getElementById("resultado-estrela")
const checkTexto = document.getElementById("resultado-texto")

botao.addEventListener("click", mostrar)

function mostrar() {

    document.getElementById("titulo-principal").style.display = 'none';
    document.getElementById("mensagem-principal").style.display = 'none';
    document.getElementById("class-rate").style.display = 'none';
    document.getElementById("caixa-mensagem").style.display = 'none';
    document.getElementById("enviar").style.display = 'none';

    document.getElementById("card-resultado").style.display = 'block';

    if (document.getElementById("one").checked) {
        checkEstrela.innerHTML = "Você deu a nota: 1"
        
    } else if (document.getElementById("two").checked) {
        checkEstrela.innerHTML = "Você deu a nota: 2"

    } else if (document.getElementById("three").checked) {
        checkEstrela.innerHTML = "Você deu a nota: 3"

    } else if (document.getElementById("four").checked) {
        checkEstrela.innerHTML = "Você deu a nota: 4"

    } else if (document.getElementById("five").checked) {
        checkEstrela.innerHTML = "Você deu a nota: 5"
        
    } else 
        alert("Marque uma estrela")
        /* aqui não consegui impedir do formulário ser enviado sem nenhum check no radio.*/

    checkTexto.innerHTML = conteudoMensagem.value;
 
}