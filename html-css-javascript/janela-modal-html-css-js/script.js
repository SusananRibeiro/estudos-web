function abrirModal() {
    const modal = document.getElementById('janela-modal') // para dizer qual ID foi dado no HTML
    modal.classList.add('abrir')

    // "e" significa que vai ser trabalhado com os eventos do javascript            
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal') {
            modal.classList.remove('abrir')

        }
    }) 
}