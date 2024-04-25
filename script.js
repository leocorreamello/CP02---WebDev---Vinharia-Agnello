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
var preco = 0;
function btnDesconto(){
    var desconto = document.getElementById("desconto").value;
    if (desconto === "FIAP2024"){
        preco = preco - (preco * 0.10);
    }
}
function btnCompar1(){
    var quantidade1 = parseInt(document.getElementById("qtd-v1").value);
    preco += quantidade1 * 129;
    lista1.innerText = `Vinho Seco Natural Tinto Cântico - x${quantidade1}`;
    carrinho.innerText = `Valor Total: R$ ${preco},00`;
}
function btnCompar2(){
    var quantidade2 = parseInt(document.getElementById("qtd-v2").value);
    preco += quantidade2 * 99;
    lista2.innerText = `Vinho Seco Natural Rosé Matias - x${quantidade2}`;
    carrinho.innerText = `Valor Total: R$ ${preco},00`;
}
function btnCompar3(){
    var quantidade3 = parseInt(document.getElementById("qtd-v3").value);
    preco += quantidade3 * 180;
    lista3.innerText = `Vinho Seco Natural Branco - x${quantidade3}`;
    carrinho.innerText = `Valor Total: R$ ${preco},00`;
}
function btnCompar4(){
    var quantidade4 = parseInt(document.getElementById("qtd-v4").value);
    preco += quantidade4 * 99;
    lista4.innerText = `Vinho Orgânico Tinto - x${quantidade4}`;
    carrinho.innerText = `Valor Total: R$ ${preco},00`;
}
