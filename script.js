
let contador = 0;


function adicionarValor(valor) {
  contador += valor;  
  document.getElementById('contador').innerText = contador; 
}
function limparContador() {
  contador = 0;  
  document.getElementById('contador').innerText = contador; 
}
function removerValor(valor) {
  contador = Math.min(0);
  contador -= valor;  
  document.getElementById('contador').innerText = contador; 
}
