// Menu ativo
const links = document.querySelectorAll('.header-menu a')

function ativarLink(link) {
    const url = window.location.href
    const href = link.href

    if (url.includes(href)) {
        link.classList.add('ativo')
    }
}
links.forEach(ativarLink)

// Orçamento com produto previamente selecionado aberto
const parametros = new URLSearchParams(location.search)

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro)

    if (elemento) { //verifica se parametro existe
        elemento.checked = true //seleciona o produto no orçamento
    }
}
parametros.forEach(ativarProduto)

// FAQ interativo
const perguntas = document.querySelectorAll('.perguntas > dl > div') 

function abrirMenu(event) {
    let elementoClickado = event.target
    
    while (elementoClickado.tagName !== 'DIV') {
        elementoClickado = elementoClickado.parentElement
    }

    if (elementoClickado) {
        const resposta = elementoClickado.querySelector('dd')

        resposta.classList.toggle('ativa')

        const pergunta = elementoClickado.querySelector('button')
        const valorAtual = pergunta.getAttribute('aria-expanded')

        if (valorAtual === "true") {
            pergunta.setAttribute('aria-expanded', "false")
        }  else {
            pergunta.setAttribute('aria-expanded', "true");
            console.log(valorAtual)
        }
    }
}
perguntas.forEach((pergunta) => pergunta.addEventListener('click', abrirMenu))