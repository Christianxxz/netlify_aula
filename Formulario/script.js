const nota = 8;
const presenca = 0.75;

if(nota >= 7 && presenca >= 0.75){
    console.log("Aprovado!")
} else{
    console.log("Reprovado!")
}

const senha = 4321;

if(senha === 1234){
    console.log("Acesso permitido!")
} else{
    console.log("Acesso negado!")
}

const usuario = "admin"; // ou root

if(usuario === "admin" || usuario === "root"){
    console.log("Acesso total!")
} else {
    console.log("Acesso restrito!")
}

const temperatura = 20;

if(temperatura >= 30 && temperatura <= 40){
    console.log("Dia quente")
}

const numero = 10;

if(numero != 0){
    console.log("Numero valido")
}

const combustivel = "gasolina"; // ou etanol

if(combustivel === "gasolina" || combustivel === "etanol"){
    console.log("Pode viajar")
} else {
    console.log("Nao pode viajar")
}


const idade = 18;

if(idade < 12 || idade > 60){
    console.log("Desconto aplicado")
} else{
    console.log("Desconto nao aplicado")
}

const login = "larissa";
const senha = "abc123";

if(login === "larissa" && senha === "abc123"){
    console.log("Bem vinda")
} else {
    console.log("Acesso negado")
}

const itens = 90;

if(itens > 100){
    console.log("Estoque cheio")
}

const numero = 6;

if(numero % 2 == 0){
    console.log("É par")
} else {
    console.log("É impar")
}



const numero = 6;

if(numero % 2 != 0){
    console.log("É par")
} else {
    console.log("É impar")
}

const velocidade = 90;

if(velocidade > 80){
    console.log("Multado")
}

const saldo = 0;

if(saldo <= 0){
    console.log("Sem saldo")
}

const produto = 120;
let cupom = true;
if(produto > 100 && cupom === true){
    console.log("Desconto aplicado")
}

const altura = 1.60;
const idade = 12;

if(altura > 1.50 && idade > 10){
    console.log("Brinquedo liberado")
}


const pagamento = "credito"; //ou pix

if(pagamento === "credito" || pagamento === "pix"){
    console.log("Pagamento aceito")
}

const cor = "azul";

if(cor != "vermelho"){
    console.log("Cor permitida")
}


const ano = 2008;

if(ano % 4 == 0 ){
    console.log("Ano bissexto")
}

const resposta = "S"; //ou "s"

if(resposta === "S" || resposta === "s"){
    console.log("Confirmado")
}

const peso = 150;

if(peso > 100 && peso < 200){
    console.log("Peso permitido")
}


const cliente = "VIP";
let cupom = true;

if(cliente === "VIP" || cupom === true){
    console.log("Desconto extra")
}

const idade = 23;

if(idade >= 18 && idade <= 25){
    console.log("Plano Jovem")
}

const porta = "fechada";
let trancada = true;

if(porta === "fechada" && trancada === true){
    console.log("Segurança ativada")
}

const email = "kdjslkd@gmail.com";

if(email.includes("@") && email.includes(".com")){
    console.log("Email valido")
}

const horario = 11;

if(horario < 12 ){
    console.log("Bom dia")
}

const escolha = 4;

if(escolha != 1 && escolha != 2 && escolha!= 3){
    console.log("Opcao invalida")
}

const animal = "cachorro"; //ou gato

if(animal === "cachorro" || animal === "gato"){
    console.log("Animal domestico")
}

const preco = 0;

if(preco === 0){
    console.log("É gratis")
}


let logado = true;
let permissao = true;

if(logado === true && permissao === true){
    console.log("Açao autorizada")
}