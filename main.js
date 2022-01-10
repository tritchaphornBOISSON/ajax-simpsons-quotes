function fetchSimsonQuote() {

    const url = `https://thesimpsonsquoteapi.glitch.me/quotes`;
    fetch(url)
        .then(function(response) {
            return response.json();
        })

        .then(function(result) {
console.log(result);
            const quoteHtml = `
        <p><strong>Character : ${result[0].character}</strong></p>
        <p><strong>Quote : ${result[0].quote}</strong></p>
        <img src="${result[0].image}" />
      `;
            document.querySelector('#simpson').innerHTML = quoteHtml;
        });
}

fetchSimsonQuote();