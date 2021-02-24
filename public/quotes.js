// Utilizando Quotes Free API
// https://type.fit/api/quotes

let globalText = null;
let globalAuthor = null;
let globalQuotes = [];
let globalButton = null;

window.addEventListener('load', start);

async function start() {
    globalText = document.getElementById('text');
    globalAuthor = document.getElementById('author');
    globalButton = document.getElementById('newQuote');
    await getQuotes();

    globalButton.addEventListener('click', inspiracao);
    
    inspiracao();
}

async function getQuotes() {
    try {
        res = await fetch('https://type.fit/api/quotes');
        globalQuotes = await res.json();

    } catch (err) {
        console.log(err);

        /// Pode comentar aqui, assim ele está mostrando o erro como um quote kkkk
        globalQuotes = [{
            text: err,
            author: 'Error'
        }];
        /////
    }
}

function inspiracao() {
    if (globalQuotes.length === 0) {
        return;
    }
    var i = Math.floor(Math.random() * globalQuotes.length);
    globalText.innerHTML = globalQuotes[i].text;
    globalAuthor.innerHTML = globalQuotes[i].author;
}