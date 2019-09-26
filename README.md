# liri-app
spotify and omdb api utilizing axios

<img src="/1f4e783b9bb8fe843633be161df9c27.gif" alt="Node-Liri-App" style="max-width:100%;">
## 

![Node-Liri-App](assets/screenshot.gif)


## Usage

1. Clone repo
2. npm install
3. cd liri-node-app
4. Please see `notes` below to run the app 
5. ENJOY! 

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Tech Used 

* NodeJS
* JavaScript
* NPM Request [Request](https://www.npmjs.com/package/request).
* NPM Spotify [Spotify](https://www.npmjs.com/package/spotify).
* NPM Bands-in-Town[API](https://manager.bandsintown.com/support/bandsintown-api).
* NPM IMDB    [OMDB API](http://www.omdbapi.com).
* Ajax 

## License

N/A

##Notes 

* LIRI will display your latest tweets. If you dont have a Twitter account it will default to my Twitter if no parameters are inputted


Liri will work four different ways which can take in one of the following commands:

* `concert-this'

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

node liri.js do-what-it-says
* This uses the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.