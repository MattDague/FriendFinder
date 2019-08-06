//requires path
var path = require("path");

//exports routing function
module.exports = function (app) {

  //default page displays home
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  // survey page link
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  //another link to home, used for button
  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};

