// Validação do formulário
document.getElementById('formCadastro')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const nome = document.getElementById('nome');
    const cpf = document.getElementById('cpf');
    const email = document.getElementById('email');
    const tipo = document.querySelector('input[name="tipo"]:checked');
    const mensagem = document.getElementById('mensagem');

    let valido = true;

    [nome, cpf, email].forEach(campo => {
        if (!campo.value) {
            campo.classList.add('erro');
            valido = false;
        } else {
            campo.classList.remove('erro');
        }
    });

    if (!tipo) {
        document.querySelector('fieldset').classList.add('erro');
        valido = false;
    } else {
        document.querySelector('fieldset').classList.remove('erro');
    }

    if (valido) {
        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.style.color = "green";
        this.reset();
    } else {
        mensagem.textContent = "Por favor, verifique os campos destacados.";
        mensagem.style.color = "red";
    }
});

// Modo escuro / alto contraste
const botaoContraste = document.getElementById('btn-contraste');
if (botaoContraste) {
    botaoContraste.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
        document.querySelectorAll('form, input, select, fieldset').forEach(el => {
            el.classList.toggle('dark-mode');
        });
    });
}
