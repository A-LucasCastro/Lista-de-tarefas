const inputTarefa = document.querySelector('.input-tarefas')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

inputTarefa.addEventListener('click', function() {
    const input = document.querySelector('.input-tarefas')
    input.classList.remove('erro')
})

function criaDiv() {
    const div = document.createElement('div')
    return div
}

function criaDivPai() {
    const divPai = document.createElement('div')
    return divPai
}

function criaLi() {
    const li = document.createElement('li')
    return li
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaLixo(div) {
    const lixeiro = document.createElement('i')
    lixeiro.classList.add('far')
    lixeiro.classList.add('fa-trash-alt')
    div.classList.add('lixo')
    div.appendChild(lixeiro)
}

function criaBotaoApagar(div) {
    div.classList.add('apagar')
}

function criaTarefa(textoInput) {
    const li = criaLi()
    const div = criaDiv()
    const divPai = criaDivPai()
    li.innerHTML = textoInput
    tarefas.appendChild(divPai)
    divPai.appendChild(li)
    divPai.appendChild(div)
    criaBotaoApagar(div)
    criaLixo(div)
    limpaInput()
}

document.addEventListener('click', function(e) {
    const el = e.target

    console.log(el)

    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
    }
})

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) {
        const input = document.querySelector('.input-tarefas')
        input.classList.add('erro')
        return
    }

    criaTarefa(inputTarefa.value)
})

//<i class="far fa-trash-alt"></i>