var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friends = [
    {
        "name": "Matt",
        "photo": "https://amp.businessinsider.com/images/5c9e3dc88e436a498b57b025-1920-960.jpg",
        "scores": [
        "5",
        "1",
        "4",
        "4",
        "5",
        "1",
        "2",
        "5",
        "4",
        "1"
        ]
        }
];



app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});



app.get("/api/friends", function(req, res){
    return res.json(friends)
});

// app.get("app/api/friends", function(req, res){
//     return res.json(friends)
// });

/////////////////////////////////////////

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend);
    
    friends.push(newFriend);
    res.json(newFriend);
    console.log("New Friend Added")
    
  });

////////////////////////////////////////////

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
