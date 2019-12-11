var express = require("express");
var request = require("request");
var app = express();

app.set("view engine", "ejs");

var city = "chennai";

var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=271d1234d3f497eed5b1d80a07b3fcd1`;

app.get("/", function(req, res) {
  request(url, function(error, response, body) {
    wea_json = JSON.parse(body);
    console.log(wea_json);

    var weather = {
      city: city,
      temp: wea_json.main.temp,
      desc: wea_json.weather[0].description
    };

    var weather_data = { weather: weather };

    res.render("index", weather_data);
  });
});

app.listen(8000);
