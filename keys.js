const twitter = require("twitter");
const spotify = require("node-spotify-api");

var spotifyKeys = new spotify({

	id: "d64873b961364518b9538bcb84b5db2a",
	secret: "733ed60717c64bc6b0ce6727edca7a64"


});

var twitterKeys = new twitter({

  consumer_key:'WuYeOdNrBVNL3D9ukoaXFtMgb',
  consumer_secret:'3FDf3WhL7WHSkG6anXMakNJPOt1vjaS5718RimeAYWzh6S91WS',
  access_token_key:'913802631398772742-1Kk5pAMBkb3xQxgSHwghQyTsEMUFfOy',
  access_token_secret:'M84wjZrIt46opg6ZMSpcKU3zABCZOHI1VtYifrmQppv96' ,

});

module.exports = {
	
	twitterKeys:twitterKeys,
	spotifyKeys:spotifyKeys
}
