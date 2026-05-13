window.addEventListener("load", () => {
  generateQuotes();
  generateStates();
});

function generateQuotes() {
  fetch("https://full-stack-api-and-random-quote-generator.onrender.com/api/quotes/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

function generateStates() {
  fetch("https://full-stack-api-states.onrender.com/states/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};