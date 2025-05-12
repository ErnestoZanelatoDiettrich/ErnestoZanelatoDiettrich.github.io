
let contador = 0;

function atualizarValor() {
      document.getElementById('contador').textContent = valor;
    }
function adicionarValor(valor) {
  contador += valor;  
  document.getElementById('contador').innerText = contador; 
}
function limparContador() {
  contador = 0;  
  document.getElementById('contador').innerText = contador; 
}
function removerValor(valor) { 
  contador = Math.max(0, contador - valor);
  atualizarValor();
}
