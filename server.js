// server.js
var express = require('express');
var log = require('morgan')('dev');
var bodyParser = require('body-parser');
var cors = require('cors')
var properties = require('./config/properties');
var db = require('./config/database');
var app = express();
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});
var router = express.Router();

var whitelist = properties.CORS;
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
};  

app.use(cors(corsOptions));


app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

db();
require("./routes/auth.routes")(app);
require("./routes/ocr.routes")(app);
require("./routes/patient.routes")(app);
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

const PORT = process.env.PORT || 8080;

// set port, listen for requests
app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT} port.`);
})
