var numeroSecreto = parseInt(Math.random() * 10)
alert(numeroSecreto)
var tentativas = 3

alert("Você tem 3 tentativas!")

while (tentativas > 0){
  
   var chute = parseInt(prompt("Coloque um numero entre 0 e 10"))

    if(numeroSecreto === chute){
      alert("Correto, parabens!!!")
      break
    } else if(chute > numeroSecreto){
      alert("Ainda esta a cima")
      tentativas = tentativas - 1
    } else if(chute < numeroSecreto){
      alert("Ainda esta a baixo")
      tentativas = tentativas - 1
    }
} if(tentativas == 0){
    alert("Errouuuuuu!!!\nO numero secreto era " + numeroSecreto)
  }
//tentar fazer um bingo

