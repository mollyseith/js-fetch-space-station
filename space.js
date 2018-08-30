function getSpaceStationLocation() {
  return fetch("http://api.open-notify.org/iss-now.json").then(r => r.json());
}

function showSpaceStationLocation() {
  let div = document.querySelector(".space-station-location");
  div.innerHTML = "";
  getSpaceStationLocation().then(json => {
    div.innerHTML = `
    <span>Current ISS Location: Longitude ${
      json.iss_position.longitude
    } Latitude ${json.iss_position.latitude}</span>
    `;
  });
}

function fetchPassTimes(lat, lon) {
  return fetch(
    `http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${lon}`
  ).then(r => r.json());
}

function showPassTimes() {
  let div = document.querySelector(".pass-times");
  let latInput = document.querySelector(".lat-input");
  let lonInput = document.querySelector(".lon-input");
  div.innerHTML = "";
  fetchPassTimes().then(json => {
    div.innerHTML = `<div>
    <p>Next Pass Times:</p>
    ${json.response.map(
      pass => `<span>Rise: ${pass.risetime} Duration: ${pass.duration}</span>`
    )}
  </div>`;
  });
}

function fetchSpacePeople() {
  return fetch("http://api.open-notify.org/astros.json").then(res =>
    res.json()
  );
}

function showSpacers() {
  let div = document.querySelector(".space-peeps");
  div.innerHTML = "";
  fetchSpacePeople().then(json => {
    div.innerHTML = `<ul>
    ${json.people
      .map(spacer => `<li>${spacer.name} is on the ${spacer.craft}</li>`)
      .join("")}
  </ul>
    `;
  });
}

document.addEventListener("DOMContentLoaded", function() {
  let issLocationButton = document.querySelector(".get-location");
  issLocationButton.addEventListener("click", showSpaceStationLocation);
  let passTimesButton = document.querySelector(".get-pass-times");
  passTimesButton.addEventListener("click", showPassTimes);
  showSpacers();
});
