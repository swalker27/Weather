$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "<b><h2>Today's Weather</h2></b>" +
      "<b>Summary: </b>" + data.currently.summary +
      "<br><b>Temperature: </b>" + data.currently.temperature +
      "<br><b>Humidity: </b>" + data.currently.humidity +
      "<br><b>Probability of Rain: </b>" + data.currently.precipProbability +

    "<br><br><b><h2> Three Day Weather Forecast</h2></b>" +

    "<b><u><h4> Tomorrow </h4></u></b>" +
      "<b>Summary: </b>" + data.daily.data[0].summary +
      "<br><b>Temperature: </b>" + data.daily.data[0].temperature +
      "<br><b>Min Temperature: </b>" + data.daily.data[2].temperatureMin +
      "<br><b>Humidity: </b>" + data.daily.data[0].humidity +
      "<br><b>Probability of Rain: </b>" + data.daily.data[0].precipProbability +
    "<br><br><u><b><h4> +1 Day </h4></u></b>" +
      "<b>Summary: </b>" + data.daily.data[1].summary +
      "<br><b>Max Temperature: </b>" + data.daily.data[1].temperatureMax +
      "<br><b>Min Temperature: </b>" + data.daily.data[1].temperatureMin +
      "<br><b>Humidity: </b>" + data.daily.data[1].humidity +
      "<br><b>Probability of Rain: </b>" + data.daily.data[1].precipProbability +
    "<br><br><b><u><h4> +2 Days </h4></u></b>" +
      "<b>Summary: </b>" + data.daily.data[2].summary +
      "<br><b>Max Temperature: </b>" + data.daily.data[2].temperatureMax +
      "<br><b>Min Temperature: </b>" + data.daily.data[2].temperatureMin +
      "<br><b>Humidity: </b>" + data.daily.data[2].humidity +
      "<br><b>Probability of Rain: </b>" + data.daily.data[2].precipProbability +

    "<br><br><br><b><h2>Have a wonderful day!</h2></b>";

    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
