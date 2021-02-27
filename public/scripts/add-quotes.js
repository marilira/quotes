// Add new quote
function addNewQuoteField() {
    // pega o campo da citação
    const quoteField = document.getElementsByClassName('input-group')[0].children[1]
    // pega o campo do nome do autor
    const authorField = document.getElementsByClassName('input-group')[1].children[1]
    // verifica se a citação e o nome do autor foram preenchidos para poder colocar outra quote
    if (quoteField.value == "" || authorField.value == "") {
        window.alert('Preencha todos os campos')
        return
    } 
    // pega o container da nova quote
    const container = document.getElementById('new-quote')
    // faz com que o container da quote apareça
    function showNewQuote() {
        container.classList.remove('hidden')
    }
    // verifica se a class hidden está no container
    const hasHidden = container.classList.contains('hidden') // retorna true
    // se a class hidden não está no container ele é duplicado
    if (hasHidden) {
        showNewQuote()
    } else {
        const fieldsContainer = document.querySelectorAll('.new-quote')
        const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
        
        container.appendChild(newFieldContainer)
    } 
}

// Delete the new quote
function deleteNewQuote(event) {
    const span = event.currentTarget
    span.parentNode.parentNode.remove()
}