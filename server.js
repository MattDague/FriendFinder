var express = require("express");
var path = require("path");
// var api = require("./app/routing/apiRoutes")(app)
// var HTML = require("./app/routing/htmlRoutes")(app)

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//API routes
var Friends = require("./app/data/friends")
var friends = Friends

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend);
    
    friends.push(newFriend);
    res.json(newFriend);
    console.log("New Friend Added")
    
  });

app.get("/api/friends", function(req, res){
    return res.json(friends)
});

//html routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });


app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});



app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});
