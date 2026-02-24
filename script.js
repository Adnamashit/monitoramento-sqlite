async function atualizarStatus() {
    try {
      
        const resposta = await fetch('/api/usuarios');
        const usuarios = await resposta.json();

       
        usuarios.forEach(usuario => {
           
            const borda = document.getElementById(`borda-usuario-${usuario.id}`);
            
            if (borda) {
              
                borda.classList.remove('vermelha', 'verde');
            
                if (usuario.status_online === 1) {
                    borda.classList.add('verde');
                } else {
                    borda.classList.add('vermelha');
                }
            }
        });
    } catch (erro) {
        console.error("Erro ao buscar o status da galera:", erro);
    }
}


atualizarStatus();
setInterval(atualizarStatus, 3000);