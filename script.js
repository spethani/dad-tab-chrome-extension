// get dad joke element
const jokeElem = document.getElementById("dadJoke");

// define html request
const url = "https://icanhazdadjoke.com/";
const options = {
    headers: {
        Accept: "application/json"
    }
};

// fetch the dad joke
fetch(url, options)
  .then(response => {
      return response.json();
  })
  .then(result => {
      jokeElem.innerText = result.joke;
      createTweet(result.joke);
  });

// Create share button to tweet joke
function createTweet(joke) {
  const shareDiv = document.querySelector("#shareDadJoke");
  const jokeURI = encodeURIComponent(joke.trim());
  const html = `<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=${jokeURI}" target="_blank">
    <img src="./twitter-share-button.png" />
  </a>`;

  let template = document.createElement('template');
  template.innerHTML = html;
  let jokeNode = template.content.childNodes[0];
  shareDiv.appendChild(jokeNode);
}