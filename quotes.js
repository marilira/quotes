// Utilizando Quotes Free API
// https://type.fit/api/quotes

function inspiracao() {
    fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => console.log(data));
}