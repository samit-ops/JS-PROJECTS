const jokeButton =
  document.querySelector("#jokeButton");

const jokeElement =
  document.querySelector("#joke");

const loadingMessage =
  document.querySelector("#loadingMessage");

const errorMessage =
  document.querySelector("#errorMessage");


jokeButton.addEventListener("click", function () {
  jokeElement.textContent = "";
  errorMessage.textContent = "";
  loadingMessage.textContent = "Loading joke...";

  const url =
    "https://v2.jokeapi.dev/joke/Programming?type=single";

  fetch(url)

    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data);

      jokeElement.textContent = data.joke;
      loadingMessage.textContent = "";
    })

    .catch(function (error) {
      console.log(error);

      errorMessage.textContent =
        "Unable to load joke. Please try again.";

      loadingMessage.textContent = "";
    })

    .finally(function () {
      loadingMessage.textContent = "";

      console.log("Request completed");
    });
});