# liri-app


[![Image from Gyazo](https://i.gyazo.com/a9ce80850ad1f961c52df5809dba9e70.png)](https://gyazo.com/a9ce80850ad1f961c52df5809dba9e70)

[![Image from Gyazo](https://i.gyazo.com/c1949ce1bd20390ac1eded2dacb09f34.png)](https://gyazo.com/c1949ce1bd20390ac1eded2dacb09f34)

[![Image from Gyazo](https://i.gyazo.com/6c1e749af8bbca214684238e3cbe0791.png)](https://gyazo.com/6c1e749af8bbca214684238e3cbe0791)

[![Image from Gyazo](https://i.gyazo.com/be865572138cb18c5569ddd22aa3fc4e.png)](https://gyazo.com/be865572138cb18c5569ddd22aa3fc4e)


![Node-Liri-App](assets/screenshot.gif)

## Usage

1. Clone repo
2. npm install
3. cd liri-node-app
4. Please see `notes` below to run the app 

## Tech Used 

* NodeJS
* JavaScript
* NPM Request [Request](https://www.npmjs.com/package/request).
* NPM Spotify [Spotify](https://www.npmjs.com/package/spotify).
* NPM Bands-in-Town[API](https://manager.bandsintown.com/support/bandsintown-api).
* NPM IMDB    [OMDB API](http://www.omdbapi.com).
* Ajax 

## License


##Notes 


Liri will work four different ways which can take in one of the following commands:

* `concert-this`

* `spotify-this-song`

* `movie-this`

* `do-what-it-says`

##What Each Command Should Do

node liri.js concert-this
* This will show concerts by veenue, location and time in your terminal/bash window.

node liri.js spotify-this-song 
* This will show the following information about the song in your terminal/bash window
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
* if no song is provided then your program will default to
* "I Want it That Way"

node liri.js movie-this
* This will output the following information to your terminal/bash window:
* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.
* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
