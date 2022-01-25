//questao 1
document.write("--------------------------------------------<br> <b>Questao 1</b><br><br>")
var n2 = 0
var media = 0
for(var i=0;i<20;i++){
var n1 = Math.random(new Array(20)) * 100   

if (n1.toFixed(0) % 2 == 0){
    n2++
 document.write(i + " | " + n1.toFixed(0) + "<br>")   
} else {
    document.write(i + " | " + n1.toFixed(0) + "<br>")  
}
}
media = (n2) / 2 
var porcentagem = media * 10
document.write("<br>Total de numeros pares é: " + n2 + "<br> Pocentagem de numeros pares:  " + porcentagem + "%")


// questao 2
document.write("<br><br>--------------------------------------------<br><br> <b>Questao 2</b>")
var n4 = []

for(var i=0;i<3;i++){
    n4[i] = Number(prompt("Digite o valor da nota"))
}
for(var i=0;i<3;i++){
    document.write("<br>Valor da nota " + (i+1) + " é: " + n4[i])
}

// Questao 3
document.write("<br><br>--------------------------------------------<br><br> <b>Questao 3</b>")

var saude = prompt("Digite o valor da vida")
var dano = prompt("Digite o valor do dano")


function DANO (dano,saude) {
   if(dano >= saude){
       return true
   } else {
       return false
   }
}
document.write("<br> O dano matou o personagem? " + DANO())
