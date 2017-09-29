const fs =require("fs");
const keys = require("./keys.js");
const request = require("request");

let myCommand = process.argv[2];
let myQuery = process.argv[3];

switch(myCommand){

	case "my-tweets": ;
	break;

	case "spotify-this-song":;
	break;

	case "movie-this": ;
	break;

	case "do-what-it-says": ;
	break;

	default: console.log("Please Enter a Command: "+"\n"+"* my-tweets"
							+"\n"+"* spotify-this-song"+"\n"+"* movie-this"
							+"\n"+"* do-what-it-says");
	break;

} 
