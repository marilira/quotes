// Utilizando Quotes Free API
// https://type.fit/api/quotes

function inspiracao() {
    fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
            var i = Math.floor(Math.random() * data.length);
            document.getElementById('text').innerHTML = data[i].text;
            document.getElementById('author').innerHTML = data[i].author;
        });
}