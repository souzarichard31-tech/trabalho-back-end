// Aguarda o DOM carregar para garantir que o formulário existe
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona o formulário pelo ID definido no seu HTML
    const formulario = document.getElementById('Formulario');

    formulario.addEventListener('submit', function(event) {
        // Impede a página de recarregar ao enviar o formulário
        event.preventDefault();

        // Captura os valores dos campos usando os IDs do seu HTML
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        // Cria um objeto para o usuário
        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        };

        // Lógica de "Banco de Dados" (LocalStorage)
        // 1. Puxa a lista de usuários já cadastrados ou cria uma lista vazia
        const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];

        // 2. Adiciona o novo usuário à lista
        usuariosCadastrados.push(usuario);

        // 3. Salva a lista atualizada de volta no navegador
        localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));

        // Exibe o alerta de sucesso solicitado
        alert('Cadastro realizado com sucesso!');

        // Limpa os campos do formulário após o sucesso
        formulario.reset();
        
        // Opcional: Mostra no console para conferência
        console.log('Usuários cadastrados até agora:', usuariosCadastrados);
    });
});