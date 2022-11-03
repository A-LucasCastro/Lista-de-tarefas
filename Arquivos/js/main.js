const inputTarefa = document.querySelector('.input-tarefas')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

inputTarefa.addEventListener('click', function() {
    const input = document.querySelector('.input-tarefas')
    input.classList.remove('erro')
})

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) {
            const input = document.querySelector('.input-tarefas')
            input.classList.add('erro')
            return
        }
    
        criaTarefa(inputTarefa.value)
    }
})

function criaDiv() {
    const div = document.createElement('div')
    return div
}

function criaDivPai() {
    const divPai = document.createElement('div')
    divPai.classList.add('divLi')
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
    salvarTarefas()
}

document.addEventListener('click', function(e) {
    const el = e.target

    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
        salvarTarefas()
    }
})

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) {
        const input = document.querySelector('.input-tarefas')
        input.classList.add('erro')
        alert('Por favor digite uma tarefa!')
        return
    }

    criaTarefa(inputTarefa.value)
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('.divLi')
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerHTML
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas) // Salva os dados e converte em string
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas) // Volta a ser array

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}

adicionaTarefasSalvas()