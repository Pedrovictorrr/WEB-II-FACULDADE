//Questão 1
var num1 = Math.round(Math.random() * 10000) + 1
document.write("o numero aleatorio é :", num1)

var unidade = (num1 / 1) % 10
var dezena = (num1 / 10) % 10
var centena = (num1 / 100) % 10
var milhar = (num1 / 1000) % 10

if (num1 > 9) {
    document.write("<br>Unidade é ", Math.trunc(unidade) + "<br>")
}
if (num1 > 9) {
    document.write("<br>Dezena é ", Math.trunc(dezena) + "<br>")
}
if (num1 > 99) {
    document.write('<br>Centena é ', Math.trunc(centena) + "<br>")
}
if (num1 > 999) {
    document.write('<br>Milhar é ', Math.trunc(milhar) + "<br>")
}


//Questão 2

var n1 = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
var n2 = prompt("Tente descobrir qual numero eu escolhi, esta entre 0 e 5, digite um valor:")
if (n1 == n2) {
    alert("Voce acertou o numero!!! Escolhemos o numero: " + n1)
} else {
    alert("Voce perdeu!!! Eu escolhi o numero: " + n1)
}

//Questao 3

var vel = prompt("Digite a velocidade do carro")

if (vel > 80) {
    alert("VELOCIDADE ACIMA DO LIMITE!!! Seu carro foi multado em: R$" + (vel * 7).toFixed(2))
} else {
    alert("Velocidade registrada foi de " + vel + "km/h e o limite da pista é de 80km/h, você esta dentro do limite, boa viagem!!!")
}

//Questao 4

var km = Math.floor(prompt("Digite a distancia da viagem em km"))
if (km <= 200) {
    alert("Valor da viagem é: R$" + (km * 0.5).toFixed(2))
} else {
    alert("Valor da viagem é: R$" + (km * 0.45).toFixed(2))
}

//Questao 5

var ano = prompt("Digite um ano:")
if (ano % 400 == 0) {
    alert(ano + " é um ano bissexto")
} else {
    alert(ano + " não é um ano bissexto")
}


//Questao 6

var n1 = prompt("Digite um numero")
var n2 = prompt("Digite outro numero")
var n3 = prompt("Digite outro numero")
const n4 = Math.min(n1, n2, n3)
const n5 = Math.max(n1, n2, n3)

alert("O menor numero é: " + n4 + ". O maior é: " + n5)



//Questao 7
var sal = Math.round(prompt("Digite o valor do seu salario"))
if (sal > 1250) {
    var salario = Math.round((sal / 100) * 10)
    alert("Seu salario com aumento é: R$" + Math.round(sal + salario).toFixed(2))
} else {
    var salario = Math.round((sal / 100) * 15)
    alert("Seu salario com aumento é: R$" + Math.round(sal + salario).toFixed(2))
}
