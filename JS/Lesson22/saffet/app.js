let quotes = [
    {
        id:0 ,
        text: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
        author: "- Chinese Proverb" 
    },
    {
        id: 1,
        text: "Life is what happens to you while you’re busy making other plans.",
        author: "- John Lennon"
    },
    {
        id: 2,
        text: "People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.",
        author: "- Zig Ziglar"
    },
    {
        id: 3,
        text: "A truly rich man is one whose children run into his arms when his hands are empty.",
        author: "- Unknown"
    },
    {
        id: 4,
        text: "Fall seven times and stand up eight.",
        author: "- Japanese Proverb"
    },
    {
        id: 5,
        text: "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
        author: "- Bob Dylan"
    },
    {
        id: 6,
        text: "Life shrinks or expands in proportion to one’s courage.",
        author: "- Anais Nin"
    },

]


const bodyElement = document.getElementsByTagName("body");
let newQuoteButton = document.getElementById("newQuote");
let fa_brands = document.getElementsByTagName("i");
let quoteClass = document.getElementsByClassName("quote");
let quoteText = document.getElementById("quoteText");
let author = document.getElementById("author");

newQuoteButton.addEventListener("click", change);

let index = 1;

function change(){

    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    randomColorCode = "#" + randomColor;
    document.body.style.backgroundColor = randomColorCode;
    document.body.style.color = randomColorCode;


    for(let i =0; i<fa_brands.length; i++){
        fa_brands[i].style.color = randomColorCode;
    }

    newQuoteButton.style.backgroundColor =randomColorCode;
    // Until here, color changing done. Includes background, links and button.


    if(index<quotes.length){
        quoteText.innerText = quotes[index].text;
        author.innerText = quotes[index].author;
        index++;
    }else{
        index = 0;
        quoteText.innerText = quotes[index].text;
        author.innerText = quotes[index].author;
    }

    console.log(index);
}
