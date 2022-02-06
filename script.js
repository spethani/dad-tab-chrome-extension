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
  });

// play dad music
new Audio("minion-laugh.mp3").play();