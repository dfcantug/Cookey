var express = require('express');
var path = require('path');
var app = express();

app.set('port', process.env.PORT || 8000);
app.set('views', __dirname + '/views');
app.set('components', __dirname + '/components');
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
app.use(app.router);
app.use(express.static(path.join(__dirname, '/')));

app.get('/', function (req, res) {
  res.render('index');
  ReactDOM.render(
      <div>Hello cookey</div>,
        document.getElementById('root');
  )
})

app.listen(app.get('port'), function () {
  console.log('App listening on port ' + app.get('port'));
})
