/*App URL:
http://hellomongoosejoaquindev.herokuapp.com/
Git URL:
git@heroku.com:hellomongoosejoaquindev.git  
Use the following code to set up your app for local development:
git clone git@heroku.com:hellomongoosejoaquindev.git -o herok */

// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

