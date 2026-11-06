// =========================================
// 1. VALIDAÇÃO DO FORMULÁRIO
// =========================================

// Selecionando os elementos do formulário
const formulario = document.getElementById("formulario-contato");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");

const aviso = document.getElementById("mensagem-formulario");


// Evento executado quando o formulário é enviado
formulario.addEventListener("submit", function(event) {

    // Impede o envio e o recarregamento da página
    event.preventDefault();

    // Captura os valores digitados e remove espaços desnecessários
    const valorNome = nome.value.trim();
    const valorEmail = email.value.trim();
    const valorAssunto = assunto.value.trim();
    const valorMensagem = mensagem.value.trim();

    // Limpa as mensagens anteriores
    aviso.textContent = "";
    aviso.className = "";

    // Verifica se o nome possui pelo menos 3 caracteres
    if (valorNome.length < 3) {

        aviso.textContent = "Por favor, informe um nome com pelo menos 3 caracteres.";
        aviso.className = "mensagem-erro";

    }

    // Verifica se o e-mail foi preenchido e possui formato válido
    else if (valorEmail === "" || !email.checkValidity()) {

        aviso.textContent = "Por favor, informe um e-mail válido.";
        aviso.className = "mensagem-erro";

    }

    // Verifica se o assunto foi preenchido
    else if (valorAssunto === "") {

        aviso.textContent = "Por favor, preencha o campo de assunto.";
        aviso.className = "mensagem-erro";

    }

    // Verifica se a mensagem possui pelo menos 10 caracteres
    else if (valorMensagem.length < 10) {

        aviso.textContent = "A mensagem precisa ter pelo menos 10 caracteres.";
        aviso.className = "mensagem-erro";

    }

    // Se todas as informações estiverem corretas
    else {

        aviso.textContent =
            "Mensagem validada com sucesso! Este envio é apenas uma simulação. Nenhum e-mail foi enviado e nenhum dado foi armazenado.";

        aviso.className = "mensagem-sucesso";

        // Limpa os campos após a confirmação
        formulario.reset();

    }

});


// =========================================
// 2. INTERAÇÃO ADICIONAL
// MOSTRAR E OCULTAR INFORMAÇÕES DA ONG
// =========================================

// Selecionando o botão e o painel de informações
const botaoInformacoes = document.getElementById("botao-informacoes");
const informacoesOng = document.getElementById("informacoes-ong");


// Evento executado quando o botão é clicado
botaoInformacoes.addEventListener("click", function() {

    // Verifica se as informações estão ocultas
    if (informacoesOng.hidden === true) {

        // Mostra as informações
        informacoesOng.hidden = false;

        // Atualiza o texto do botão
        botaoInformacoes.textContent = "Ocultar informações";

        // Atualiza o estado de acessibilidade
        botaoInformacoes.setAttribute("aria-expanded", "true");

    }

    else {

        // Oculta as informações
        informacoesOng.hidden = true;

        // Atualiza o texto do botão
        botaoInformacoes.textContent = "Saiba mais";

        // Atualiza o estado de acessibilidade
        botaoInformacoes.setAttribute("aria-expanded", "false");

    }

});