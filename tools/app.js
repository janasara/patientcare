/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js Middleware for leap events application
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
let express = require('express');


let bodyParser = require("body-parser");



// create a new express server
let app = express();

// serve the files out of ./public as our main files


app.use(bodyParser.json());

app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.listen(5002, '0.0.0.0', function() {
        // print a message when the server starts listening
        console.log(" Middleware server starting on " + 5002);
});



app.get('/diagnosticcenters', function(req, res) {

var Client = require('node-rest-client').Client;
var client = new Client();

//var url="http://localhost:9090/patientcare/v1/diagnosticcenters"

var url="http://localhost:9761/patientcare/v1/diagnosticcenters"

client.get(url, function (data, response) {
// parsed response body as js object 
//console.log(docs);
res.json(data);

});
});

app.get('/homeremedies', function(req, res) {

var Client = require('node-rest-client').Client;
var client = new Client();

//var url="http://localhost:9092/patientcare/v1/homeremedies"

var url="http://localhost:9761/patientcare/v1/homeremedies"

client.get(url, function (data, response) {
// parsed response body as js object 
//console.log(docs);
res.json(data);

});
});



app.get('/labtests', function(req, res) {

var Client = require('node-rest-client').Client;
var client = new Client();

//var url="http://localhost:9091/patientcare/v1/diagnosticreports/seebhoopi@gmail.com"

var url="http://localhost:9761/patientcare/v1/diagnosticreports"

client.get(url, function (data, response) {

res.json(data);
console.log("data  ====" + JSON.stringify(data));
});
});



app.post('/labtest', function(req, res) {
                 //Example POST method invocation 
                var Client = require('node-rest-client').Client;
                
                var client = new Client();
                
                // set content-type header and data as json in args parameter 
                var args = {
                    data: req.body,
                    headers: { "Content-Type": "application/json" }
                };
            
               //var url="http://localhost:9091/patientcare/v1/diagnosticreports"
               var url="http://localhost:9761/patientcare/v1/diagnosticreports"

               client.post(url, args, function (data, response) {
 
            console.log(data);
  
             res.json(data);
});


});


app.delete('/labtest/:id', function(req, res) {
        let id = req.params.id;
           var Client = require('node-rest-client').Client;
                
                var client = new Client();
                
                // set content-type header and data as json in args parameter 
                var args = {
                    data: req.body,
                    headers: { "Content-Type": "application/json" }
                };
               // var url="http://localhost:9091/patientcare/v1/diagnosticreports/"
               var url="http://localhost:9761/patientcare/v1/diagnosticreports/"
               client.delete(url+id, args, function (data, response) {
 
            console.log(data);
  
             res.json(data);
        });

});



app.put('/labtest/:id', function(req, res) {
    //console.log("Inside note update" );
    //console.log(req.body);
    // http://localhost:9091/patientcare/v1/diagnosticreports/ord1
        let id = req.params.id;
           var Client = require('node-rest-client').Client;
                
                var client = new Client();
                
                // set content-type header and data as json in args parameter 
                var args = {
                    data: req.body,
                    headers: { "Content-Type": "application/json" }
                };
                //var url="http://localhost:9091/patientcare/v1/diagnosticreports/"
                var url= "http://localhost:9761/patientcare/v1/diagnosticreports/"

               client.put(url+id, args, function (data, response) {
 
            console.log(data);
  
             res.json(data);
        });

});


