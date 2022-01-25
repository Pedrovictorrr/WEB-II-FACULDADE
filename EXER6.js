var n1 = []
var n2 = []
var acertos = []
for(var i=0;i<6;i++){
    n2[i] = Number(prompt("Digite um numero"))

}
document.write("<b>Numeros sorteados:</b><br>")
for (var i = 0;i<6;i++){
    n1[i] = Number(Math.round(Math.random() * 60))
    if(n1[i] != n1[i-1] && n1[i] != n1[i-2] && n1[i] != n1[i-3] && n1[i] != n1[i-4] && n1[i] != n1[i-5] && n1[i] != n1[i-6]  ) {
      document.write(n1[i].toFixed(0) + " ,") 
      } else {
        i--
    }
}
for(var i=0; i<n2.length; i++) {
    if(n1.indexOf(Number(n2[i])) > -1) {
        acertos.push(n2[i])
    }
}
n2.sort((a, b) => a - b)
n1.sort((a, b) => a - b)

document.write("<br> Você acertou " + acertos.length + " números: ", acertos + "<br>")
document.write("Seus numeros são:<br>")
for (var i = 0;i<6;i++){
    console.log(n1)
    console.log(n2)
    
    document.write(n2[i].toFixed(0) + " ," ) 
}

if (n1 === n2){
    document.write("Voce ganhou o sorteio")
} else {
    document.write("<br> Voce perdeu")
}
 




