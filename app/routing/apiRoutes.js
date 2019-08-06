
//requires data from friends list
var friends = require("../data/friends")

//exports the functions
module.exports = function (app) {

  // get for pulling data from api
  app.get("/api/friends", function (req, res) {
    return res.json(friends)
  });

//posting data to api
  app.post("/api/friends", function (req, res) {
    friends.push(req.body);
    res.json(req.body);
  });

};
