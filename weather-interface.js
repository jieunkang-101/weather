import { WeatherService } from './../src/weather-service.js';

$(document).ready(function() {

  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    (async () => {
      let weatherService = new WeatherService();
      const response = await weatherService.getWeatherByCity(city);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      } else {
        $('.showHumidity').text(`There was an error handling your request.`);
        $('.showTemp').text(`Please check your inputs and try again!`);
      }
    }

  });
});







// <----- IIFE (Immediately-Invoked Function Expression)------>
$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    (async () => {
      try {
        // The API call is business logic.
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
        let jsonifiedResponse;
        if (response.ok && response.status == 200) {
          jsonifiedResponse = await response.json();
        } else {
          jsonifiedResponse = false;
        }
        // The getElements method is UI logic so it will need to be separated from the business logic.  
        getElements(jsonifiedResponse);
      } catch {
        getElements(false);
      }
    })();

    const getElements = function(response) {
      if (response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      } else {
        $('.showHumidity').text(`There was an error handling your request.`);
        $('.showTemp').text(`Please check your inputs and try again!`);
      }
    }
  });
});


// <---------- async & await ------------->
$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    asyncApicall();

    async function asyncApiCall() {
      try {
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[API-KEY-GOES-HERE]`);
        let jsonifiedResponse;
        if (response.ok && response.status == 200) {
          jsonifiedResponse = await response.json();
        } else {
          jsonifiedResponse = false;
        }
        getElements(jsonifiedResponse);
      } catch {
        getElements(false);
      }
    }

    const getElements = function(response) {
      if (response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      } else {
        $('.showHumidity').text(`There was an error handling your request.`);
        $('.showTemp').text(`Please check your inputs and try again!`);
      }
    }
  });
});  


  // <--------Fetch-------->
$(document).ready(function() {  
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[[API-KEY-GOES-HERE]]`)
    .then(function(response) {
      if (response.ok && response.status == 200) {
        return response.json();
      } else {
        return false;
      }
    })
    .catch(function(error) {
      return false;
    })
    .then(function(jsonifiedResponse) {
      getElements(jsonifiedResponse);
    });

    const getElements = function(response) {
      if (response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      } else {
        $('.showHumidity').text(`There was an error handling your request.`);
        $('.showTemp').text(`Please check your inputs and try again!`);
      }
    }
  });
});  


  //<------------Promise-------------->
$(document).ready(function() {  
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});  


  //<--------------Vanilla JavaScript------------------>
$(document).ready(function() { 
  $('#weatherLocation').click(function() {
    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
  });  
});  