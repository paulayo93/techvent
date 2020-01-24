var express = require("express");

var env = (process.env.NODE_ENV = process.env.NODE_ENV || "development");



var app = express();

require("./expressConfig")(app);

require("./passport")();

require("./routes")(app);


var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});

server;
