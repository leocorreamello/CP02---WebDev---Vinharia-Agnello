//verificação.html----------------------------------------------
function btnMais18(){
    //window.location.href é usada para reredicionar para outra pagina.
    window.location.href = "login.html";
}
function btnMenos18(){
    window.location.href = "https://www.google.com/";
}
//login.html---------------------------------------------------
var resultado = document.getElementById("resultado");
function btnLogin(){
    var user = document.getElementById("login").value;
    var senha = parseInt(document.getElementById("senha").value);
    if (user === "1234" && senha === 1234){
        window.location.href = "index.html";
    }else{
        resultado.innerText = "Usuário ou Senha Incorreto. Tente Novamente";
    }
}
//index.html---------------------------------------------------
var carrinho = document.getElementById("carrinho");
var lista1 = document.getElementById("lista1");
var lista2 = document.getElementById("lista2");
var lista3 = document.getElementById("lista3");
var lista4 = document.getElementById("lista4");
var msgCup = document.getElementById("msgCupom");
var preco = 0;
function btnCompar1(){
    var quantidade1 = parseInt(document.getElementById("qtd-v1").value);
    preco += quantidade1 * 129;
    lista1.innerText = `Vinho Seco Natural Tinto Cântico - x${quantidade1}`;
    carrinho.innerText = `Valor Total: R$ ${preco}`;
}
function btnCompar2(){
    var quantidade2 = parseInt(document.getElementById("qtd-v2").value);
    preco += quantidade2 * 99;
    lista2.innerText = `Vinho Seco Natural Rosé Matias - x${quantidade2}`;
    carrinho.innerText = `Valor Total: R$ ${preco}`;
}
function btnCompar3(){
    var quantidade3 = parseInt(document.getElementById("qtd-v3").value);
    preco += quantidade3 * 180;
    lista3.innerText = `Vinho Seco Natural Branco - x${quantidade3}`;
    carrinho.innerText = `Valor Total: R$ ${preco}`;
}
function btnCompar4(){
    var quantidade4 = parseInt(document.getElementById("qtd-v4").value);
    preco += quantidade4 * 99;
    lista4.innerText = `Vinho Orgânico Tinto - x${quantidade4}`;
    carrinho.innerText = `Valor Total: R$ ${preco}`;
}
function btnDesconto(){
    var desconto = document.getElementById("desconto").value;
    if (desconto === "FIAP2024") {
        // Aplicar desconto de 10%
        var precoDesconto = preco * 0.9; // Preço com desconto de 10%
        preco = precoDesconto;
        carrinho.innerText = `Valor Total: R$ ${preco.toFixed(2)}`;
        msgCup.innerText = `Cupom de 10% aplicado com sucesso`;
    } else {
        msgCup.innerText = `Cupom inválido`;
    }
}
function btnFinalizar(){
    alert("Compra realizada com Sucesso!!!");
}
function btnEnviarForm(){
    alert("Formulário enviado!");
}