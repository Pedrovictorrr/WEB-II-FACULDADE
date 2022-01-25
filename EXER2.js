   //Questao 1
   var n1 = prompt("Digite um numero: ")
   var n2 = prompt("Digite outro numero: ")
   var n3 = n1 + n2
   var n4 = n1 - n2
   var n5 = n1 * n2
   var n6 = n1 / n2
   var n7 = n1 % n2 
   
   document.write("<br><b>Questao 1</b><br>")
   document.write("A soma dos dois numeros é: " + n3 + "<br>")
   document.write("A subtração dos dois numeros é: " + n4 + "<br>")
   document.write("A multiplicação dos dois numeros é: " + n5 + "<br>")
   document.write("A divisao dos dois numeros é: " + n6 + "<br>")
   document.write("O resto dos dois numeros é: " + n7 + "<br>")
   
       //Questao 2
   document.write("<br><b>Questao 2</b><br>")
   var n8 = parseInt(prompt("Digite a primeira nota: "))
   var n9 = parseInt(prompt("Digite a segunda nota: "))
   var n10 = parseInt(prompt("Digite a terceira nota: "))
   var n11 = parseInt(prompt("Digite a quarta nota: "))
   var media = ((n8 + n9) + (n10 + n11)) / 4
   document.write("A média dessas notas é: " + media + "<br>")
   
       //Questao 3
   document.write("<br><b>Questao 3</b><br>")
   var n12 = parseInt(prompt("Digite um numero para ser calculado o dobro dele"))
   var n13 = n12 * n12
   document.write("Dobro do numero digitado: " + n13 + "<br>")
   
       //Questao 4
   document.write("<br><b>Questao 4</b><br>")
   var n14 = parseFloat(prompt("Digite o valor da conta do restaurante"))
   var n15 = (n14 / 100) * 10
   var n16 = (n14 + n15)
   document.write("Valor da conta é: R$" + n14.toFixed(2) + "<br> Valor dos 10% do garçom é: R$" + n15.toFixed(2) + "<br> Valor total da conta é: R$" + n16.toFixed(2) )
   
