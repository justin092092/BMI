const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendfile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/bmicalculator.html", function(req, res) {
    var weight = Number(req.body.Weight);
    var heightFeet = Number(req.body.heightFeet);
    var heightInch = Number(req.body.heightInch);
    var height = heightFeet * 12 + heightInch;
    var result = weight * 703 / (height * height);
    result = Math.floor(result);
    res.send("<h1>your BMI is </h1>" + result)

});

app.listen(3000, function() {
    console.log("listening on 3000")
});