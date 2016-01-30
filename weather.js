$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "<b>Today's weather is: </b>" + data.currently.summary + "." +
    "<br><b> Today's temperature is: </b>" + data.currently.temperature + "." +
    "<br><br><b> Tomorrow's weather will be: </b>" + data.daily.data[0].summary +
    "<br><br><b> Monday's weather is: </b>" + data.daily.data[1].summary +
    "<br><br><b> Tuesday's weather is: </b>" + data.daily.data[2].summary +
    "<br><br><b>Have a great day!</b>";

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
