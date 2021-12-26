// Express BMI exercise
// use npm to install express module in this directory: npm install express
// require express in project
// must install body-parser with npm install body-parser
// then require body-parser

const express = require("express");
const bodyParser = require("body-parser");
// Setup express
const app = express();

var weight = 0;
var height = 0;
var bmi = 0;

app.use(bodyParser.urlencoded({extended: true}));

// Create a root route get method with app.get()
// app.get('/', (req, res) => { //## OR use the word function and no =>
app.get('/', function (req, res) {
  /*   
  console.log(req);
  console.log(res);
  */
  res.sendFile(__dirname + "/bmiCalculator.html");
  console.log(__dirname + "/bmiCalculator.html");

});

app.post("/", function(req, res) {
  
  console.log(req.body.weight);
  console.log(req.body.height);

  var weight = Number(req.body.weight);
  var height = Number(req.body.height / 100);
  var bmi = round(weight / (height * height), 1);

  console.log("Your BMI is: " + bmi);

/* 
   Severe Thinness	< 16
   Moderate Thinness	16 - 17
   Mild Thinness	17 - 18.5
   Normal	18.5 - 25
   Overweight	25 - 30
   Obese Class I	30 - 35
   Obese Class II	35 - 40
   Obese Class III	> 40
*/

  switch(true) {
    case (bmi < 16):
      res.send("Your BMI is: " + bmi + ". You are severly thin.");
      break;

    case (bmi >= 16 && bmi <= 17):
      res.send("Your BMI is: " + bmi + ". You are moderately thin.");
      break;

    case (bmi > 17 && bmi < 18.5):
      res.send("Your BMI is: " + bmi + ". You are mildly thin.");
      break;

    case (bmi >= 18.5 && bmi < 25):
      res.send("Your BMI is: " + bmi + ". You have a normal weight.");
      break;

    case (bmi >= 25 && bmi < 30):
      res.send("Your BMI is: " + bmi + ". You are overweight.");
      break;

    case (bmi >= 30 && bmi < 35):
      res.send("Your BMI is: " + bmi + ". You have obesity Class I.");
      break;

    case (bmi >= 35 && bmi < 40):
      res.send("Your BMI is: " + bmi + ". You have obesity Class II.");
      break;

    case (bmi >= 40):
      res.send("Your BMI is: " + bmi + ". You have obesity Class III.");
      break;

    default:
      res.send("You entered incorrect data. Please try again. Weight: " + weight + ", height: "  + height);
  }
})

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});

// give possibility to display a decimal number with a certain precision
function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}