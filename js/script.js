document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formCadastro");
    const mensagem = document.getElementById("mensagem");
    const cpfField = document.getElementById("cpf");
    const tipoFieldset = document.getElementById("tipoCadastro");

    // Formata CPF ao perder foco
    cpfField.addEventListener("blur", function () {
        let cpf = cpfField.value.replace(/\D/g, "");
        if(cpf.length === 11){
            cpfField.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        }
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Campos
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const cpf = document.getElementById("cpf");
        const telefone = document.getElementById("telefone");
        const data = document.getElementById("data");
        const endereco = document.getElementById("endereco");
        const cep = document.getElementById("cep");
        const cidade = document.getElementById("cidade");
        const estado = document.getElementById("estado");
        const tipo = document.querySelector("input[name='tipo']:checked");

        let valido = true;

        // Reset bordas
        [nome, email, cpf, telefone, data, endereco, cep, cidade, estado].forEach(c => c.style.border = "");
        tipoFieldset.style.border = "1px solid #ccc"; // reset do fieldset

        // Validações
        if (nome.value.trim() === "") { nome.style.border = "2px solid red"; valido = false; }
        if (!email.value.includes("@")) { email.style.border = "2px solid red"; valido = false; }
        if (!cpf.value.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/)) { cpf.style.border = "2px solid red"; valido = false; }
        if (!telefone.value.match(/\(?\d{2}\)?\s?\d{4,5}-?\d{4}/)) { telefone.style.border = "2px solid red"; valido = false; }
        if (data.value === "") { data.style.border = "2px solid red"; valido = false; }
        if (endereco.value.trim() === "") { endereco.style.border = "2px solid red"; valido = false; }
        if (!cep.value.match(/\d{5}-?\d{3}/)) { cep.style.border = "2px solid red"; valido = false; }
        if (cidade.value.trim() === "") { cidade.style.border = "2px solid red"; valido = false; }
        if (estado.value.trim() === "" || estado.value.length !== 2) { estado.style.border = "2px solid red"; valido = false; }

        if (!tipo) { 
            tipoFieldset.style.border = "2px solid red"; // destaca o fieldset
            valido = false; 
        }

        if (!valido) {
            mensagem.textContent = "⚠️ Verifique os campos destacados e tente novamente.";
            mensagem.style.color = "red";
        } else {
            mensagem.textContent = "✅ Cadastro realizado com sucesso!";
            mensagem.style.color = "green";
            form.reset();
            tipoFieldset.style.border = "1px solid #ccc"; // reset após sucesso
        }
    });
});
