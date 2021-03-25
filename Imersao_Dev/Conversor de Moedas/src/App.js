function capturar(){
 
  var valorProduto = document.getElementById("valorProduto").value;
  var valorProdutoNum = parseFloat (valorProduto);
  var cotacaoMoeda = document.getElementById("cotacaoMoeda").value;
  var cotacaoMoedaNum = parseFloat (cotacaoMoeda);
  
  var total = cotacaoMoedaNum * valorProdutoNum;

  document.getElementById('Resultado').innerHTML = total.toFixed(2);
 
}

export{App}