//express requirement
var express = require("express");
var app = express();

//port for local connection
var PORT = process.env.PORT || 3000;

//express 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routing
require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)

//listn to show connection
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});
