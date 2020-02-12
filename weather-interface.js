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
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }
  });
});  








// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     const city = $('#location').val();
//     $('#location').val("");

//     asyncApicall();

//     async function asyncApicall() {
//       let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
//       let jsonifiedResponse = await response.json();
//       getElements(jsonifiedResponse);
//     }

//     // (async () => {
//     //   let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
//     //   let jsonifiedResponse = await response.json();
//     //   getElements(jsonifiedResponse);
//     // })();

//     const getElements = function(response) {
//       $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
//       $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
//     }
//   });
// });







    //   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);  
    //     .then(function(response) {
    //       return response.json();
    //     })
    //     .then(function(jsonifiedResponse) {
    //       getElements(jsonifiedResponse);
    //     });

    //   const getElements = function(response) {
    //     $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
    //     $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    //   }  
    // });  




    // let promise = new Promise(function(resolve, reject) {
    //   let request = new XMLHttpRequest();
    //   let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
    //   request.onload = function() {
    //     if (this.status === 200) {
    //       resolve(request.response);
    //     } else {
    //       reject(Error(request.statusText));
    //     }
    //   }
    //   request.open("GET", url, true);
    //   request.send();
    // });

    // promise.then(function(response) {
    //   let body = JSON.parse(response);
    //   $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
    //   $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    // }, function(error) {
    //   $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    // });
    // });




    // let request = new XMLHttpRequest();
    // const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

    // request.onreadystatechange = function() {
    //   if (this.readyState === 4 && this.status === 200) {
    //     const response = JSON.parse(this.responseText);
    //     getElements(response);
    //   }
    // }

    // request.open("GET", url, true);
    // request.send();

    // const getElements = function(response) {
    //   $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
    //   $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    // }
  