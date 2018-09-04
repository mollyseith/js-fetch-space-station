function getSpaceStationLocation() {
  return fetch("http://api.open-notify.org/iss-now.json").then(r => r.json());}

function getSpacePeople() {
  return fetch("http://api.open-notify.org/astros.json").then(r =>r.json());}


function showSpaceStationLocation() {
  let div = document.querySelector(".space-station-location");
  getSpaceStationLocation().then(json => {
    div.innerHTML = `Location- Longitude: ${json.iss_position.longitude}
    Latitude: ${json.iss_position.latitude}`;})}

function showSpacePeople() {
  let div = document.querySelector(".people");
  getSpacePeople().then(json => {
    div.innerHTML = `<ul style="list-style-type:none">
    ${json.people.map(spaceboi => `<li>${spaceboi.name} is on ${spaceboi.craft} rn </li>`).join("")}
  </ul>`;
  });}

document.addEventListener("DOMContentLoaded", function() {
  let issLocationButton = document.querySelector(".locator");
  issLocationButton.addEventListener("click", showSpaceStationLocation);
  showSpacePeople();
});
