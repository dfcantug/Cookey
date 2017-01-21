  var express = require("express");
var path = require('path');
 var app = express();
 var port = process.env.PORT || 3000;

 app.set('port', port);
 app.use(express.static(__dirname));
 app.set('views', __dirname + '/src/views');
 app.set('scripts', __dirname + '/src/scripts');
 app.engine('html', require('ejs').__express);
 app.set('view engine', 'html');

 app.use(express.static(path.join(__dirname, '/')));
 app.get("/", function (req,res) {
       res.render('index.ejs');
 });
 app.get("/cookbook", function (req, res) {
   res.render('cookBook.ejs')
})
 app.listen(port);
 console.log("listening on port " + port);
