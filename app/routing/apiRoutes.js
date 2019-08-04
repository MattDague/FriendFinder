var friends = require("../data/")

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend);
    
    friends.push(newFriend);S
    res.json(newFriend);
    console.log("New Friend Added")
    
  });

app.get("/api/friends", function(req, res){
    return res.json(friends)
});
