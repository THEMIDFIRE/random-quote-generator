var quotes = [
    {
        text: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
        author: 'Albert Einstein',
        img: 'imgs/9810.jpg'
    },
    {
        text: 'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.',
        author: 'Bernard M. Baruch',
        img: 'imgs/5768330.jpg'
    },
    {
        text:'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.',
        author: 'Dr. Seuss',
        img: 'imgs/61105.jpg'
    },
    {
        text:'You only live once, but if you do it right, once is enough.',
        author: 'Mae West',
        img: 'imgs/259666.jpg'
    },
    {
        text:'Live as if you were to die tomorrow. Learn as if you were to live forever.',
        author: 'Mahatma Gandhi',
        img: 'imgs/5810891.jpg'
    },
    {
        text: 'Without music, life would be a mistake.',
        author: 'Friedrich Nietzsche',
        img: 'imgs/1938.jpg'
    },
    {
        text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
        author: 'Ralph Waldo Emerson',
        img: 'imgs/1938.jpg'
    },
    {
        text: 'It is better to be hated for what you are than to be loved for what you are not.',
        author: 'Andre Gide',
        img: 'imgs/7617.jpg'
    },
    {
        text: 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.',
        author: 'Albert Einstein',
        img: 'imgs/9810.jpg'
    },
    {
        text: 'I have not failed. I\'ve just found 10,000 ways that won\'t work.',
        author: 'Thomas A. Edison',
        img: 'imgs/7617.jpg'
    },
    {
        text: 'Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.',
        author: 'Bill Keane',
        img: 'imgs/3230608.jpg'
    }
]
var lastIndex = -1;

function quoteGenerator() {
    var randomIndex;

    for (var i = 0; i < quotes.length; i++) {
        randomIndex = Math.floor(Math.random() * quotes.length);
        if (randomIndex !== lastIndex) {
            break;
        }
    }

    lastIndex = randomIndex;

    var randomQuote = quotes[randomIndex];

    document.getElementById('quote').innerText ='"' + randomQuote.text + '"';
    document.getElementById('author').innerText ='--' + randomQuote.author;
    document.getElementById('authorImg').src = randomQuote.img;
}
