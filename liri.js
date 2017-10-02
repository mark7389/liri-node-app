const fs =require("fs");
const keys = require("./keys.js");
const request = require("request");
const client = keys.twitterKeys;
const spotifyClient = keys.spotifyKeys;

let myCommand = process.argv[2];
let myQuery = "";

let count = 3;

while(process.argv[count]){

	if(process.argv[count+1]){
		
		myQuery += process.argv[count]+" ";
	}
	else{

		myQuery += process.argv[count];
	}
	count++;
}

switch(myCommand){

	case "my-tweets":getTweets() ;
	break;

	case "spotify-this-song":spotifyThis();
	break;

	case "movie-this": movieData();
	break;

	case "do-what-it-says": doSays();
	break;

	default: console.log("Please Enter a Command: "+"\n"+"* my-tweets"
							+"\n"+"* spotify-this-song"+"\n"+"* movie-this"
							+"\n"+"* do-what-it-says");
	break;

} 

function doSays(){

	fs.readFile("random.txt", "utf8", function(err, data){

		if (err) {

		    return console.log(err);
		}

		myQuery = data.slice(0,-1);
		console.log(myQuery.length);
		console.log(myQuery);
		spotifyThis();

	});

}

function getTweets(){

	var params = {screen_name: "eagle_soli"};
	client.get("statuses/user_timeline", params, function(err, tweets, response){

		if(!err){
			
			for(var i=0; i<20; i++){

				console.log("Tweet: "+tweets[i].text+"\n\n Created@>> "+tweets[i].created_at+"\n");

			};
		}


	});


}
function spotifyThis(){
	
	if(myQuery == ""){

		myQuery = "The Sign ";
		
		
	}
	else{

		myQuery = myQuery.split(" ");

		for(var j = 0; j<myQuery.length; j++){
			
			if(myQuery[j]){

				myQuery[j] = myQuery[j].charAt(0).toUpperCase() + myQuery[j].slice(1);


			}
			
		}

		myQuery = myQuery.join(" ");
		
		
	}

	spotifyClient.search({type:"track", query: myQuery}, function(err, data){

		if(err){
			console.log(err);
		}
		else{

			//console.log(data.tracks.items);
			let ctr = 0;
			let tracksArr = data.tracks.items;
			let artist, songName, link = "Not Available!", songAlbum ;
			for(var i = 0; i<tracksArr.length; i++){
					 // console.log(tracksArr[i]);
						// console.log(tracksArr[i].artists[0].name);
						// console.log("---------------------------------------------");
				
				if(tracksArr[i].name === myQuery){
					// console.log(tracksArr[i].name);
					// console.log(tracksArr[i].artists[0].name);
					// console.log("---------------------------------------------");
					ctr++;
					artist = tracksArr[i].album.artists[0].name;
					songName = myQuery;
					if(tracksArr[i].preview_url){
						
						link = tracksArr[i].preview_url;

					}
					songAlbum = tracksArr[i].album.name;
					console.log("Result[ "+ctr+" ]:"+"\n"+"--------"+"\n\n"+
						">> Artist: " +artist+"\n\n"+
						">> Song Title: "+songName+"\n\n"+
						">> Album: "+songAlbum+"\n\n"+
						">> Listen to Preview At: "+link+"\n"+"____________________________"+"\n");

				}

			}
			
		}

	});
	
	
}

function movieData(){

	if(myQuery === ""){

		myQuery = "Mr Nobody";
	}
   
	request("http://www.omdbapi.com/?t="+myQuery+"&y=&plot=short&apikey=40e9cece", function(error, response, body) {

  			// If the request is successful (i.e. if the response status code is 200)
  			if (!error && response.statusCode === 200) {

  				

  				var myObj = JSON.parse(body);
   			 	console.log(" * Title of the movie: "+myObj.Title+"\n\n"+
   			 				" * Year the movie came out: "+myObj.Year+"\n\n"+
   			 				" * IMDB Rating of the Movie: "+myObj.imdbRating+"\n\n"+
   			 				" * Rotten Tomatoes Rating of the movie: "+myObj.Ratings[1].Value+"\n\n"+
   			 				" * Country where the movie was produced: "+myObj.Country+"\n\n"+
   			 				" * Language of the movie: "+myObj.Language+"\n\n"+
   			 				" * Plot of the movie: "+myObj.Plot+"\n\n"+
   			 				" * Actors in the movie: "+myObj.Actors+"\n\n");

  			}
});



}
