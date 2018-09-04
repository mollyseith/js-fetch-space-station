function fetchTrivia(num) {
  return fetch(`http://numbersapi.com/${num}/trivia`).then(res => res.text());
}

function showOneTrivia() {
  let div = document.querySelector(".number-one-fact");
  fetchTrivia(1).then(trivia => {
    div.innerHTML = trivia;
  });
}

function showTrivia() {
  let div = document.querySelector(".number-trivia");
  let num = document.querySelector(".trivia-input").value;
  fetchTrivia(num).then(trivia => {
    div.innerHTML = trivia;
  });
}

function fetchYearFact(year) {
  return fetch(`http://numbersapi.com/${year}/year`).then(res => res.text());
}

function showYearFact(year) {
  let div = document.querySelector(".year-fact");
  div.innerHTML = "";
  fetchYearFact(year).then(fact => {
    div.innerHTML = fact;
  });
}

function addYearFactInterval() {
  let year = new Date().getFullYear();
  showYearFact(year);
  setInterval(() => {
    year--;
    showYearFact(year);
  }, 5000);
}

function getAllTheNumbers() {
  return fetch("http://numbersapi.com/1..1000").then(res => res.json());
}

function showAllTheNumbers() {
  let div = document.querySelector(".all-the-numbers");
  getAllTheNumbers().then(numbers => {
    let html = "<ul>";
    for (key in numbers) {
      html += `<li>${numbers[key]}</li>`;
    }
    html += "</ul>";
    div.innerHTML = html;
  });
}

document.addEventListener("DOMContentLoaded", function() {
  let oneButton = document.querySelector(".get-one-fact");
  oneButton.addEventListener("click", showOneTrivia);
  let triviaButton = document.querySelector(".get-num-fact");
  triviaButton.addEventListener("click", showTrivia);
  addYearFactInterval();
  let allNumbersButton = document.querySelector(".get-all-the-numbers");
  allNumbersButton.addEventListener("click", showAllTheNumbers);
});
