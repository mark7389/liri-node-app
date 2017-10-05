const twitter = require("twitter");
const spotify = require("node-spotify-api");

var spotifyKeys = new spotify({

	id: "",
	secret: ""


});

var twitterKeys = new twitter({

  consumer_key:'',
  consumer_secret:'',
  access_token_key:'',
  access_token_secret:'' ,

});

module.exports = {
	
	twitterKeys:twitterKeys,
	spotifyKeys:spotifyKeys
}
