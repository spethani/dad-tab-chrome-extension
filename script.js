/* display a random dad joke */

// get html element
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

/* play a random dad song */

// function to return a random integer from min to max (inclusive)
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// play song
new Audio(`songs/song${randInt(1, 10)}.mp3`).play();