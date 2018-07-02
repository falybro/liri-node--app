require("dotenv").config();

var keys = require("./keys.js");
var request = require("request");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");


var getTweets = function() {
    var client = new Twitter(keys.twitter);
    var params = {
        screen_name: "Mersault_bae"
    };
    client.get("statuses/user_timeline", params, function(error, tweets, resp) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++); {
                console.log(tweets[i].text + " " + tweets[i].created_at);
            }
        } else {
            console.log("There was an error. Try again");
        }
    });
};

var runFunction = function() {
    process.argv[2];
}
