// ------------------------------------------------------
// Função auxiliar - NÃO precisa mexer aqui
function testar(nomeExercicio, resultado, esperado) {
  const igual = JSON.stringify(resultado) === JSON.stringify(esperado);
  if (igual) {
    console.log(`✅ Correto - ${nomeExercicio}`);
  } else {
    console.log(`❌ Errado - ${nomeExercicio}`);
    console.log(`   Esperado: ${JSON.stringify(esperado)}`);
    console.log(`   Recebido: ${JSON.stringify(resultado)}`);
  }
}
// ------------------------------------------------------
