# Javascript `fetch` GET requests lab

## Overview

In this lab, you'll use `fetch` to send GET requests to the ISS API and the Numbers API and handle the data.

## Introduction

First we're going to use `fetch` to get data about the International Space Station 🛰👾🚀. Then, we'll check out the Numbers API and mix our Space Station info with some nerdy number facts 🔢🤓📐.

Getting data from the ISS API is simple! We pass the url into `fetch`, then add the handling behavior for the response with `.then`:

```
fetch('http://api.open-notify.org/iss-now.json')
  .then(res => res.json())
  .then(json => console.log(json));
```

The call to fetch returns a _Promise_ right away.

```
let promiseForData = fetch('http://api.open-notify.org/iss-now.json') // evaluates immediately
```

We add a handler for the data with `then`.

```
promiseForData.then(response => response.json())
```

This is similar to attaching an event handler to handle a DOM event! When the result 'happens' - when Open Notify responds to the HTTP request with some data - we want to do something with that data. `then` is the way we specify what should happen when the promise resolves.

In this case, we want to parse the body of the response as JSON, so we call the `.json()` method. `then()` returns a promise, and _that_ promise's handler will get the parsed JSON as input.

```
promiseForData
  .then(response => response.json())
  .then(json => console.log(json)
```

If we send a request to an API that returns text instead of json, we'll need to use the `.text` method on the Response object, instead of the `.json` method.

```
promiseForData
  .then(response => response.text())
  .then(text => console.log(text)
```

## SPACE STATION

API Documentation for the ISS API is at [http://open-notify.org/Open-Notify-API/](http://open-notify.org/Open-Notify-API/)

1. Space Station Location
- Build an HTML page with a button "Get Space Station Location!".
- When the user clicks the button, the page should show the latitude and longitude of the space station.

2. ISS Pass Time for a given lat / lon
- Add another button 'Get ISS Pass Time for Location'
- Add two text inputs for lat and lon
- When the user clicks the button, get the next 5 ISS pass times from the API and show them on the screen

3. People in Space
- When the page loads, fetch the people who are currently in space.
- Show their names on the screen

## NERDY NUMBERS

The [Numbers API](http://numbersapi.com/) is, in their words

> An API for interesting facts about numbers

Let's nerd out.

1. Number One.
- Build a button that fetches a piece of trivia about the number `1`
- and adds the fact to the DOM.

2. Pick a Number, Any Number.
- Add an number input
- On change, fetch a math fact about that number
- Show it on the screen

3. Those who fail to study history are doomed to repeat it
- When the page loads, set an interval
- Every 5 seconds, get a fact about a year and show it on the screen
- Start with this year
- Every 5 seconds, get the fact about the previous year
- So, after 50 seconds, it should be 2008 or so

4. All the numbers
- Add a button 'All the Numbers'
- When clicked, it should fetch facts for one hundred numbers
- And show them on the screen

🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓
🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓
🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓
🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓🔢🤓
