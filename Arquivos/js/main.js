const inputTarefa = document.querySelector('.input-tarefas')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
    const li = document.createElement('li')
    return li
}

function criaBotaoApagar(li) {
    const botaoApagar = document.createElement('i')
    botaoApagar.classList.add('fa-regular')
    botaoApagar.classList.add('fa-trash-can')
    li.appendChild(botaoApagar)
}

function criaTarefa(textoInput) {
    const li = criaLi()
    li.innerHTML = textoInput
    tarefas.appendChild(li)
    criaBotaoApagar(li)
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
})

//<i class="fa-solid fa-trash-can"></i>