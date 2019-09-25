require("dotenv").config();
const keys = require("./keys.js");
let inquirer = require("inquirer");
let moment = require("moment");
moment().format();
let fs = require("fs");
let axios = require("axios");
var Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
          
let arguments = ""
for (var i = 3; i < process.argv.length; i++){
    arguments = "" + arguments + " " + process.argv[i];
}

// node liri.js spotify-this-song '<song name here 1>' '<song name here 2>' '<song name here 3>'

if(process.argv[2] == "concert-this"){
    getConcertInfo(arguments);

}
if(process.argv[2] == "spotify-this-song"){
    getSongInfo(arguments);
}
if(process.argv[2] == "movie-this"){
    getMovieInfo(arguments);
}
if(process.argv[2] == "do-what-it-says"){
    pickRandom();
}

function getConcertInfo (concertInfo){
    console.log(`you are in concert info ` + concertInfo);
    let arg = encodeURI(concertInfo.trim());
    axios.get("https://rest.bandsintown.com/artists/"+ arg + "/events?app_id=codingbootcamp")
    //https://rest.bandsintown.com/artists/jonas%20brothers/events?app_id=codingbootcamp
    .then(function (response) {
        let concert_info = response;
        console.log(" ");
        console.log(" ");
        console.log("Here is the data that was returned from bandsintown");
        console.log(concert_info);

    }).catch(function (error) {
        console.log(error);
    })
}

function getSongInfo (songInfo){
     console.log(`you are in song info ` + songInfo);
    }

 function getMovieInfo (movieInfo){
        console.log(`you are in movie info ` + movieInfo);
       }

function pickRandom (){
        console.log(`you are in random info `);
       };









        //     let artist = result.artist;
        //   //calling Bands in Town api
        //   let queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
        //   //getting results from API
          
        //     axios.get(queryUrl).then(
        //       function (response) {
        //         //looping through resonse data info
        //         for (let i = 0; i < response.data.length; i++) {
        //           //converting date with moment()
        //           let date = moment(response.data[i].datetime).format('MM/DD/YYYY')
        //           console.log("\n=================");
        //           console.log(`Venue name:  ${response.data[i].venue.name}`);
        //           console.log(`Country:  ${response.data[i].venue.country}`);
        //           console.log(`Date:  ${date}`);
        //           console.log("=================");
        //         }
        //         //appending artist to log.txt
        //         fs.appendFile("log.txt", `\nArtist: ${artist}`, function (err) {
        //           // If an error was experienced we will log it.
        //           if (err) {
        //             console.log(err);
        //           }
        //           // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        //           else {
        //             console.log(`Artist ${artist.toUpperCase()} added to log.txt file !`);
        //           }
        //         });
            
        //         console.log("\n=================");
        //         console.log("\n=================");
        //         console.log(`Song:  ${response.tracks.items[7].name}`);
        //         console.log(`Artist: ${response.tracks.items[7].album.artists[0].name}`);
        //         console.log(`Spotify Preview: ${response.tracks.items[7].album.external_urls.spotify}`);
        //         console.log(`Album: ${response.tracks.items[7].album.name}`);
        //         console.log(`Release Year: ${response.tracks.items[7].album.release_date}`);
        //         console.log(`Preview: ${response.tracks.items[7].preview_url}`);
        //         console.log("\n=================");
        //         //appending song to log.txt
        //         fs.appendFile("log.txt", `\nSong: ${result.track}`, function (err) {
        //           // If an error was experienced we will log it.
        //           if (err) {
        //             console.log(err);
        //           }
        //           // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        //           else {
        //             console.log(`Song ${result.track.toUpperCase()} added to log.txt file !`);
        //           }
        //         });
              





        //     spotify
        //       .search({ type: 'track', query: result.track })
        //       .then(function (response) {

        //         console.log("\n=================");
        //         for (let i = 0; i < response.tracks.items.length; i++) {
        //           console.log("\n=================");
        //           console.log(`Song:  ${response.tracks.items[i].name}`);
        //           console.log(`Artist: ${response.tracks.items[i].album.artists[0].name}`);
        //           console.log(`Spotify Preview: ${response.tracks.items[i].album.external_urls.spotify}`);
        //           console.log(`Album: ${response.tracks.items[i].album.name}`);
        //           console.log(`Release Year: ${response.tracks.items[i].album.release_date}`);
        //           console.log(`Preview: ${response.tracks.items[i].preview_url}`);
        //           console.log("\n=================");
        //         }
        //         //appending song to log.txt
        //         fs.appendFile("log.txt", `\nSong: ${result.track}`, function (err) {
        //           // If an error was experienced we will log it.
        //           if (err) {
        //             console.log(err);
        //           }
        //           // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        //           else {
        //             console.log(`Song ${result.track.toUpperCase()} added to log.txt file !`);
        //           }
        //         });
        //       })
        //       .catch(function (err) {
        //         console.log(err);
        //       });
          
        // spotify
        //   .search({ type: 'track', query: data })
        //   .then(function (response) {
        //     console.log("\n=================");
        //     for (let i = 0; i < response.tracks.items.length; i++) {
        //       console.log("\n=================");
        //       console.log(`Song:  ${response.tracks.items[i].name}`);
        //       console.log(`Artist: ${response.tracks.items[i].album.artists[0].name}`);
        //       console.log(`Spotify Preview: ${response.tracks.items[i].album.external_urls.spotify}`);
        //       console.log(`Album: ${response.tracks.items[i].album.name}`);
        //       console.log(`Release Year: ${response.tracks.items[i].album.release_date}`);
        //       console.log(`Preview: ${response.tracks.items[i].preview_url}`);
        //       console.log("\n=================");
        //     }
        //     //appending movies to log file
        //     fs.appendFile("log.txt", `\nSong: ${data}`, function (err) {
        //       // If an error was experienced we will log it.
        //       if (err) {
        //         console.log(err);
        //       }
        //       // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        //       else {
        //         console.log(`Song ${data.toUpperCase()} Added to log.txt file !`);
        //       }
        //     });
        //   })

        //     axios.get("http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=trilogy").then(
        //       function (response) {
        //         console.log("\n=================");
        //         console.log(`Title: ${response.data.Title}`);
        //         console.log(`Year: ${response.data.Year}`);
        //         console.log(`IMBD Rating: ${response.data.imdbRating}`);
        //         console.log(`Country: ${response.data.Country}`);
        //         console.log(`Language: ${response.data.Language}`);
        //         console.log(`Actors: ${response.data.Actors}`);
        //         console.log(`Plot: ${response.data.Plot}`);
        //         console.log("\n=================");
        //       })
        //     //appending Mr/Nobody to log file
        //     fs.appendFile("log.txt", `\nMovie: ${'Mr.Nobody'}`, function (err) {

        //       // If an error was experienced we will log it.
        //       if (err) {
        //         console.log(err);
        //       }

        //       // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        //       else {
        //         console.log(`Movie ${'Mr.Nobody'} Added to log.txt file!`);
        //       }

        //     });





        //             console.log("\n=================");
        //             console.log(`Title: ${response.data.Title}`);
        //             console.log(`Year: ${response.data.Year}`);
        //             console.log(`IMBD Rating: ${response.data.imdbRating}`);
        //             console.log(`Country: ${response.data.Country}`);
        //             console.log(`Language: ${response.data.Language}`);
        //             console.log(`Actors: ${response.data.Actors}`);
        //             console.log(`Plot: ${response.data.Plot}`);
        //             console.log("\n=================");
        //           }
        //         })
            
        //         ombdMovie();
        //     //appending movies to log file
        //     fs.appendFile("log.txt", `\nMovie: ${result.movie}`, function (err) {

        //       // If an error was experienced we will log it.
        //       if (err) {
        //         console.log(err);
        //       }

        //       // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        //       else {
        //         console.log(`Movie ${result.movie.toUpperCase()} Added to log.txt file !`);
        //       }
        //     });
          


//   http://www.omdbapi.com/?i=tt3896198&apikey=2fed2a76

//   # Bands in Town apikey
 
//   "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"