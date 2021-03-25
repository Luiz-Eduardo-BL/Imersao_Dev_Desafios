var valorInicial = parseFloat(prompt("Qual primeiro valor?"))

var operacao = prompt("Qual operação deseja?")

var segundoValor = parseFloat(prompt("Qual segundo valor?"))
var resultado

if(operacao === "+" || "-" || "*" || "/"){
   if( operacao == '+'){
    resultado = valorInicial + segundoValor
    document.write("<h2>" + valorInicial + operacao + segundoValor + " = " + resultado + "</h2>")
  }if (operacao == '-'){
    resultado = valorInicial - segundoValor
    document.write("<h2>" + valorInicial + operacao + segundoValor + " = " + resultado + "</h2>")
  }if(operacao == '/'){
    resultado = valorInicial / segundoValor
    document.write("<h2>" + valorInicial + operacao + segundoValor + " = " + resultado + "</h2>")
  }if (operacao == '*'){
    resultado = valorInicial * segundoValor
    document.write("<h2>" + valorInicial + operacao + segundoValor + " = " + resultado + "</h2>")
  }
}else {
  document.write("<h2>Opção Invalida</h2>")
}
  