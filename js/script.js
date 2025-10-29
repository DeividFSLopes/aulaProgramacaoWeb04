document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formCadastro");
    const mensagem = document.getElementById("mensagem");
    const cpfField = document.getElementById("cpf");
    const telefoneField = document.getElementById("telefone");
    const cepField = document.getElementById("cep");
    const dataField = document.getElementById("data");
    const tipoFieldset = document.getElementById("tipoCadastro");

    // Formata CPF ao perder foco
    cpfField.addEventListener("blur", function () {
        let cpf = cpfField.value.replace(/\D/g, "");
        if(cpf.length === 11){
            cpfField.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        }
    });

    // Formata telefone enquanto digita
    telefoneField.addEventListener("input", function () {
        let v = telefoneField.value.replace(/\D/g, '');
        v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
        v = v.replace(/(\d{4,5})(\d{4})$/, '$1-$2');
        telefoneField.value = v;
    });

    // Formata CEP enquanto digita
    cepField.addEventListener("input", function () {
        let v = cepField.value.replace(/\D/g, '');
        v = v.replace(/^(\d{5})(\d)/, '$1-$2');
        cepField.value = v;
    });

    // Formata data de nascimento enquanto digita (dd/mm/aaaa)
    dataField.addEventListener("input", function () {
        let v = dataField.value.replace(/\D/g, '');
        if (v.length > 2 && v.length <= 4) {
            v = v.replace(/(\d{2})(\d+)/, '$1/$2');
        } else if (v.length > 4 && v.length <= 8) {
            v = v.replace(/(\d{2})(\d{2})(\d+)/, '$1/$2/$3');
        }
        dataField.value = v;
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const campos = ["nome","email","cpf","telefone","data","endereco","cep","cidade","estado"];
        let valido = true;

        // Reset bordas
        campos.forEach(id => document.getElementById(id).style.border = "");
        tipoFieldset.style.border = "1px solid #ccc";

        // Valida campos
        if(document.getElementById("nome").value.trim() === "") { document.getElementById("nome").style.border = "2px solid red"; valido=false; }
        if(!document.getElementById("email").value.includes("@")) { document.getElementById("email").style.border = "2px solid red"; valido=false; }
        if(!document.getElementById("cpf").value.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/)) { document.getElementById("cpf").style.border = "2px solid red"; valido=false; }
        if(!document.getElementById("telefone").value.match(/\(?\d{2}\)?\s?\d{4,5}-?\d{4}/)) { document.getElementById("telefone").style.border = "2px solid red"; valido=false; }
        if(!document.getElementById("data").value.match(/\d{2}\/\d{2}\/\d{4}/)) { document.getElementById("data").style.border = "2px solid red"; valido=false; }
        if(document.getElementById("endereco").value.trim() === "") { document.getElementById("endereco").style.border = "2px solid red"; valido=false; }
        if(!document.getElementById("cep").value.match(/\d{5}-?\d{3}/)) { document.getElementById("cep").style.border = "2px solid red"; valido=false; }
        if(document.getElementById("cidade").value.trim() === "") { document.getElementById("cidade").style.border = "2px solid red"; valido=false; }
        if(document.getElementById("estado").value.trim() === "" || document.getElementById("estado").value.length !== 2) { document.getElementById("estado").style.border = "2px solid red"; valido=false; }

        const tipo = document.querySelector("input[name='tipo']:checked");
        if(!tipo){ 
            tipoFieldset.style.border = "2px solid red"; 
            valido=false; 
        }

        if(valido){
            mensagem.textContent = "✅ Cadastro realizado com sucesso!";
            mensagem.style.color = "green";
            form.reset();
            tipoFieldset.style.border = "1px solid #ccc";
        } else {
            mensagem.textContent = "⚠️ Verifique os campos destacados e tente novamente.";
            mensagem.style.color = "red";
        }
    });
});

