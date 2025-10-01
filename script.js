document.addEventListener('DOMContentLoaded', function(){
  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modal-text');
  const confirmBtn = document.getElementById('confirm-btn');
  const cancelBtn = document.getElementById('cancel-btn');

  let salaEscolhida = "";

  // Botões de alugar
  document.querySelectorAll('.btn-alugar').forEach(btn => {
    btn.addEventListener('click', () => {
      salaEscolhida = btn.dataset.sala;
      modalText.textContent = `Tem certeza que deseja alugar a ${salaEscolhida}?`;
      modal.style.display = 'flex';
    });
  });

  // Confirmar -> redireciona
  confirmBtn.addEventListener('click', () => {
    window.location.href = "videos.html";
  });

  // Cancelar -> fecha modal
  cancelBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Clique fora do modal -> fecha
  window.addEventListener('click', (e) => {
    if(e.target === modal){
      modal.style.display = 'none';
    }
  });
});
