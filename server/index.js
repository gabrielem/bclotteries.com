var express = require('express')
var request = require("request")
var http = require('http');

var app = express()

app.get('/', function (req, res) {


  var url = "http://blockchainlotteries.com/lastdata.php?rr=" + Math.floor( (Math.random() * 1000) + 1)

  request({
      url: url,
      json: true
  }, function (error, response, body) {

      if (!error && response.statusCode === 200) {
        console.log("body.lastupdate: " + body.lastupdate)
          //console.log(body) // Print the json response

          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(body));

      }
  })

  //res.send('Hello World!')
  //res.json()
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')



})
