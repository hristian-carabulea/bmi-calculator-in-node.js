// Express Calculator Exercise
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
  // res.send("<h1>Hello there, Wide Wild World!</h1>");
  res.sendFile(__dirname + "/bmiCalculator.html");
  console.log(__dirname + "/bmiCalculator.html");

});

app.post("/", function(req, res) {
  
  console.log(req.body.weight);
  console.log(req.body.height);

  var weight = Number(req.body.weight);
  var height = Number(req.body.num2);

  var bmi = weight / (height * height);
  console.log("Your BMI is: " + bmi);
  res.send("Your BMI is: " + bmi + ". ");

/* 
  ## Underweight =< 18.5
  ## Normal weight = 18.5 <–> 24.9
  ## Overweight = 25 <–> 29.9
  ## Obesity = BMI of 30 or greater
*/

  switch(bmi) {
    case "<= 18.5":
      res.send("You are underweight.");
      break;

    case "> 18.5":
    case "< 25":
      res.send("You have a normal weight.");
      break;


    case ">= 25":
    case "< 30":
      res.send("You are overweight.");
      break;


    case ">= 30":
      res.send("You are obese.");
      break;

    default:
      res.send("You entered a incorrect data. Please try again. Weight: " + weight + ", height: "  + height);
  }

})

app.listen(3000, function() {
  // port can be any number but 3000 is a non-written standard
  // port is not showing using the port constant
  // console.log("Server started at http://localhost:${port}");
  console.log("Server is running on port 3000");
});