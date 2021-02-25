const quotes = [{
    "quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "quoteAuthor": "Thomas Edison"
    }, {
    "quoteText": "You can observe a lot just by watching.",
    "quoteAuthor": "Yogi Berra"
    }, {
    "quoteText": "A house divided against itself cannot stand.",
    "quoteAuthor": "Abraham Lincoln"
    }, {
    "quoteText": "Difficulties increase the nearer we get to the goal.",
    "quoteAuthor": "Johann Wolfgang von Goethe"
    }, {
    "quoteText": "Fate is in your hands and no one elses",
    "quoteAuthor": "Byron Pulsifer"
    }, {
    "quoteText": "Be the chief but never the lord.",
    "quoteAuthor": "Lao Tzu"
    }
];

function getNewQuote() {
    const textElement = document.getElementById('text');
    const authorElement = document.getElementById('author');
    
    function randomQuotePosition() {
        let QuotePosition = Math.floor(Math.random() * quotes.length);
        textElement.innerHTML = quotes[QuotePosition].quoteText;
        authorElement.innerHTML = quotes[QuotePosition].quoteAuthor;
    }

    randomQuotePosition();
}

getNewQuote();