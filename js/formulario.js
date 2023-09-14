const formulario = document.querySelector("form")

function formularioEnviado(resposta) {
    if (resposta.ok){
        formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #F7F7F7;'><span style='color: #317A00;'>Mensagem enviada!</span> Entraremos em contato dentro das 24 horas.</p>"
    } else {
        formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #F7F7F7;'><span style='color: #E00000;'>Erro no envio</span>, você pode recarregar a página e tentar novamente ou entrar em contato diretamente para o nosso email: contato@bikcraft</p>"
    }
}

function enviarFormulario(event) {
    event.preventDefault()

    const botao = document.querySelector("form button")
    botao.disabled = true
    botao.innerText = 'Enviando...'

    const data = new FormData(formulario)

    fetch("./enviar.php", {
        method: "POST",
        body: data
    }).then(formularioEnviado)
}

formulario.addEventListener('submit', enviarFormulario)