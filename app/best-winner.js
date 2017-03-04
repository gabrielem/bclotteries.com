var request = require("request")

var url = "http://blockchainlotteries.com/lastdata.php?rr=" + Math.floor( (Math.random() * 1000) + 1)

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
})
