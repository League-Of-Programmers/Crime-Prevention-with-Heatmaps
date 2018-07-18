var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//var port = process.env.PORT;
//var host = '127.0.0.1';

require('dotenv').load();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));

require('./routes/core.routes.js')(app);

// app.listen(port, function(){
//     //console.log(`Listening to http://${host}:${port}`);
// });
app.listen(port, process.env.IP, function(){
   console.log("Server Has Started!");
});