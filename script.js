const api_url = "https://api.quotable.io/random";
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

async function getQuote(url) {
    const response = await fetch(api_url);
    let data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

document.querySelector("#new_quote").addEventListener("click", function newQuote(){
    getQuote(api_url);
})

getQuote(api_url);



document.querySelector("#tweet_button").addEventListener("click", function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----- by " + author.innerHTML, "Tweet Window", "width=600", "height=300");
})
