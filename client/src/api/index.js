const MOVIES = {
  data: { 
    "Search": [
      { "Title": "Batman Begins", "Year": "2005", "imdbID": "tt0372784", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg" },
      { "Title": "Batman v Superman: Dawn of Justice", "Year": "2016", "imdbID": "tt2975590", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
      { "Title": "Batman", "Year": "1989", "imdbID": "tt0096895", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg" },
      { "Title": "Batman Returns", "Year": "1992", "imdbID": "tt0103776", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg" },
      { "Title": "Batman Forever", "Year": "1995", "imdbID": "tt0112462", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNWY3M2I0YzItNzA1ZS00MzE3LThlYTEtMTg2YjNiOTYzODQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" },
      { "Title": "Batman & Robin", "Year": "1997", "imdbID": "tt0118688", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg" },
      { "Title": "The Lego Batman Movie", "Year": "2017", "imdbID": "tt4116284", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg" },
      { "Title": "Batman: The Animated Series", "Year": "1992–1995", "imdbID": "tt0103359", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BNzI5OWU0MjYtMmMwZi00YTRiLTljMDAtODQ0ZGYxMDljN2E0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg" },
      { "Title": "Batman: Under the Red Hood", "Year": "2010", "imdbID": "tt1569923", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYTdlODI0YTYtNjk5ZS00YzZjLTllZjktYmYzNWM4NmI5MmMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg" },
      { "Title": "Batman: The Dark Knight Returns, Part 1", "Year": "2012", "imdbID": "tt2313197", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg" }
    ],
    "totalResults": "360",
    "Response": "True",
  },
};
const MOVIE_DETAILS = [
  { "Title": "Batman Begins", "Year": "2005", "Rated": "PG-13", "Released": "15 Jun 2005", "Runtime": "140 min", "Genre": "Action, Adventure, Thriller", "Director": "Christopher Nolan", "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)", "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes", "Plot": "When his parents are killed, billionaire playboy Bruce Wayne relocates to Asia where he is mentored by Henri Ducard and Ra's Al Ghul in how to fight evil. When learning about the plan to wipe out evil in Gotham City by Ducard, Bruce prevents this plan from getting any further and heads back to his home. Back in his original surroundings, Bruce adopts the image of a bat to strike fear into the criminals and the corrupt as the icon known as 'Batman'. But it doesn't stay quiet for long.", "Language": "English, Urdu, Mandarin", "Country": "USA, UK", "Awards": "Nominated for 1 Oscar. Another 14 wins & 72 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.3/10" }, { "Source": "Rotten Tomatoes", "Value": "84%" }, { "Source": "Metacritic", "Value": "70/100" }], "Metascore": "70", "imdbRating": "8.3", "imdbVotes": "1,156,054", "imdbID": "tt0372784", "Type": "movie", "DVD": "18 Oct 2005", "BoxOffice": "$204,100,000", "Production": "Warner Bros. Pictures", "Website": "http://www.batmanbegins.com/", "Response": "True" },
  { "Title": "Batman v Superman: Dawn of Justice", "Year": "2016", "Rated": "PG-13", "Released": "25 Mar 2016", "Runtime": "151 min", "Genre": "Action, Adventure, Fantasy, Sci-Fi", "Director": "Zack Snyder", "Writer": "Chris Terrio, David S. Goyer, Bob Kane (Batman created by), Bill Finger (Batman created by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by), William Moulton Marston (character created by: Wonder Woman)", "Actors": "Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg", "Plot": "The general public is concerned over having Superman on their planet and letting the \"Dark Knight\" - Batman - pursue the streets of Gotham. While this is happening, a power-phobic Batman tries to attack Superman.,Meanwhile Superman tries to settle on a decision, and Lex Luthor, the criminal mastermind and millionaire, tries to use his own advantages to fight the \"Man of Steel\".", "Language": "English", "Country": "USA", "Awards": "14 wins & 30 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "6.5/10" }, { "Source": "Rotten Tomatoes", "Value": "27%" }, { "Source": "Metacritic", "Value": "44/100" }], "Metascore": "44", "imdbRating": "6.5", "imdbVotes": "553,233", "imdbID": "tt2975590", "Type": "movie", "DVD": "19 Jul 2016", "BoxOffice": "$293,792,936", "Production": "Warner Bros. Pictures", "Website": "http://www.facebook.com/batmanvsuperman", "Response": "True" },
  { "Title": "Batman", "Year": "1989", "Rated": "PG-13", "Released": "23 Jun 1989", "Runtime": "126 min", "Genre": "Action, Adventure", "Director": "Tim Burton", "Writer": "Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)", "Actors": "Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl", "Plot": "Gotham City. Crime boss Carl Grissom (Jack Palance) effectively runs the town but there's a new crime fighter in town - Batman (Michael Keaton). Grissom's right-hand man is Jack Napier (Jack Nicholson), a brutal man who is not entirely sane... After falling out between the two Grissom has Napier set up with the Police and Napier falls to his apparent death in a vat of chemicals. However, he soon reappears as The Joker and starts a reign of terror in Gotham City. Meanwhile, reporter Vicki Vale (Kim Basinger) is in the city to do an article on Batman. She soon starts a relationship with Batman's everyday persona, billionaire Bruce Wayne.", "Language": "English, French, Spanish", "Country": "USA, UK", "Awards": "Won 1 Oscar. Another 8 wins & 26 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "7.5/10" }, { "Source": "Rotten Tomatoes", "Value": "72%" }, { "Source": "Metacritic", "Value": "69/100" }], "Metascore": "69", "imdbRating": "7.5", "imdbVotes": "305,095", "imdbID": "tt0096895", "Type": "movie", "DVD": "25 Mar 1997", "BoxOffice": "N/A", "Production": "Warner Bros. Pictures", "Website": "N/A", "Response": "True" },
  { "Title": "Batman Returns", "Year": "1992", "Rated": "PG-13", "Released": "19 Jun 1992", "Runtime": "126 min", "Genre": "Action, Crime, Fantasy", "Director": "Tim Burton", "Writer": "Bob Kane (Batman characters), Daniel Waters (story), Sam Hamm (story), Daniel Waters (screenplay)", "Actors": "Michael Keaton, Danny DeVito, Michelle Pfeiffer, Christopher Walken", "Plot": "In the sewers of gotham city to the rooftops of the gotham city the penguin wants to know where he came from well in his villain ways catwoman plans to kill rich man of gotham max shreak but as he battles with millionaire Bruce Wayne both ladies men have their own secrets Bruce Wayne is back as Bat man trying to stop the penguin Max is helping penguin steal gotham city while selina Kyle/catwoman tries to help penguin not knowing her man murder target also her murder is helping him but all four men have their goals taking gotham from crime winning gotham city assassination for two men and more money to be gotham citys number one rich man.", "Language": "English", "Country": "USA, UK", "Awards": "Nominated for 2 Oscars. Another 2 wins & 27 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "7.0/10" }, { "Source": "Rotten Tomatoes", "Value": "80%" }, { "Source": "Metacritic", "Value": "68/100" }], "Metascore": "68", "imdbRating": "7.0", "imdbVotes": "245,748", "imdbID": "tt0103776", "Type": "movie", "DVD": "29 Apr 1997", "BoxOffice": "N/A", "Production": "Warner Bros. Pictures", "Website": "N/A", "Response": "True" },
  { "Title": "Batman Forever", "Year": "1995", "Rated": "PG-13", "Released": "16 Jun 1995", "Runtime": "121 min", "Genre": "Action, Adventure, Fantasy", "Director": "Joel Schumacher", "Writer": "Bob Kane (characters), Lee Batchler (story), Janet Scott Batchler (story), Lee Batchler (screenplay), Janet Scott Batchler (screenplay), Akiva Goldsman (screenplay)", "Actors": "Val Kilmer, Tommy Lee Jones, Jim Carrey, Nicole Kidman", "Plot": "The Dark Knight of Gotham City confronts a dastardly duo: Two-Face and the Riddler. Formerly District Attorney Harvey Dent, Two-Face incorrectly believes Batman caused the courtroom accident which left him disfigured on one side; he has unleashed a reign of terror on the good people of Gotham. Edward Nygma, computer-genius and former employee of millionaire Bruce Wayne, is out to get the philanthropist; as The Riddler he perfects a device for draining information from all the brains in Gotham, including Bruce Wayne's knowledge of his other identity. Batman/Wayne is/are the love focus of Dr. Chase Meridan. Former circus acrobat Dick Grayson, his family killed by Two-Face, becomes Wayne's ward and Batman's new partner Robin the Boy Wonder.", "Language": "English", "Country": "USA, UK", "Awards": "Nominated for 3 Oscars. Another 10 wins & 22 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BNWY3M2I0YzItNzA1ZS00MzE3LThlYTEtMTg2YjNiOTYzODQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "5.4/10" }, { "Source": "Rotten Tomatoes", "Value": "39%" }, { "Source": "Metacritic", "Value": "51/100" }], "Metascore": "51", "imdbRating": "5.4", "imdbVotes": "215,220", "imdbID": "tt0112462", "Type": "movie", "DVD": "27 Aug 1997", "BoxOffice": "N/A", "Production": "Warner Bros. Pictures", "Website": "N/A", "Response": "True" },
  { "Title": "Batman & Robin", "Year": "1997", "Rated": "PG-13", "Released": "20 Jun 1997", "Runtime": "125 min", "Genre": "Action, Sci-Fi", "Director": "Joel Schumacher", "Writer": "Bob Kane (Batman characters), Akiva Goldsman", "Actors": "Arnold Schwarzenegger, George Clooney, Chris O'Donnell, Uma Thurman", "Plot": "Batman and Robin are back working side-by-side to stop the villains of Gotham City, but is there tension appearing between them, especially when one villainess who calls herself Poison Ivy can make anyone fall in love with her...literally. Along with Poison Ivy, the icy Mr. Freeze is freezing anything which gets in his way from achieving his goal.", "Language": "English", "Country": "USA, UK", "Awards": "10 wins & 21 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "3.7/10" }, { "Source": "Rotten Tomatoes", "Value": "10%" }, { "Source": "Metacritic", "Value": "28/100" }], "Metascore": "28", "imdbRating": "3.7", "imdbVotes": "212,689", "imdbID": "tt0118688", "Type": "movie", "DVD": "21 Oct 1997", "BoxOffice": "N/A", "Production": "Warner Home Video", "Website": "N/A", "Response": "True" },
  { "Title": "The Lego Batman Movie", "Year": "2017", "Rated": "PG", "Released": "10 Feb 2017", "Runtime": "104 min", "Genre": "Animation, Action, Comedy, Family", "Director": "Chris McKay", "Writer": "Seth Grahame-Smith (screenplay by), Chris McKenna (screenplay by), Erik Sommers (screenplay by), Jared Stern (screenplay by), John Whittington (screenplay by), Seth Grahame-Smith (story by), Bob Kane (Batman created by), Bill Finger (Batman created by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by), William Moulton Marston (Wonder Woman created by), Ole Kirk Christiansen (based on LEGO Construction Toys created by), Godtfred Kirk Christiansen (based on LEGO Construction Toys created by), Jens Nygaard Knudsen (based on LEGO Construction Toys created by)", "Actors": "Will Arnett, Michael Cera, Rosario Dawson, Ralph Fiennes", "Plot": "There are big changes brewing in Gotham City, and if he wants to save the city from The Joker's hostile takeover, Batman may have to drop the lone vigilante thing, try to work with others and maybe, just maybe, learn to lighten up.", "Language": "English", "Country": "USA, Denmark", "Awards": "11 wins & 58 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "7.3/10" }, { "Source": "Rotten Tomatoes", "Value": "90%" }, { "Source": "Metacritic", "Value": "75/100" }], "Metascore": "75", "imdbRating": "7.3", "imdbVotes": "106,394", "imdbID": "tt4116284", "Type": "movie", "DVD": "13 Jun 2017", "BoxOffice": "$175,686,290", "Production": "Warner Bros. Pictures", "Website": "http://www.legobatman.com/", "Response": "True" },
  { "Title": "Batman: The Animated Series", "Year": "1992–1995", "Rated": "TV-PG", "Released": "05 Sep 1992", "Runtime": "23 min", "Genre": "Animation, Action, Adventure, Family, Sci-Fi", "Director": "N/A", "Writer": "Bob Kane, Eric Radomski, Bruce Timm, Paul Dini, Bill Finger", "Actors": "Kevin Conroy, Efrem Zimbalist Jr., Robert Hastings", "Plot": "Heir to the Wayne family fortune, Bruce Wayne lives by day as a seemingly lavish playboy millionaire socialite, but by night assumes the role of his crime-fighting alter-ego: the caped crusader known as Batman. Throughout the Animated Series, Batman receives help from sidekicks Robin and Batgirl, as well as Police Commissioner Gordon, in protecting the streets of Gotham City from a large rogue's gallery of criminals, lunatics and nemeses.", "Language": "English", "Country": "USA", "Awards": "Won 1 Primetime Emmy. Another 3 wins & 19 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BNzI5OWU0MjYtMmMwZi00YTRiLTljMDAtODQ0ZGYxMDljN2E0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.9/10" }], "Metascore": "N/A", "imdbRating": "8.9", "imdbVotes": "70,969", "imdbID": "tt0103359", "Type": "series", "totalSeasons": "4", "Response": "True" },
  { "Title": "Batman: Under the Red Hood", "Year": "2010", "Rated": "PG-13", "Released": "27 Jul 2010", "Runtime": "75 min", "Genre": "Animation, Action, Crime, Drama, Sci-Fi, Thriller", "Director": "Brandon Vietti", "Writer": "Judd Winick, Bob Kane (Batman created by)", "Actors": "Bruce Greenwood, Jensen Ackles, John DiMaggio, Neil Patrick Harris", "Plot": "Batman faces his ultimate challenge as the mysterious Red Hood takes Gotham City by firestorm. One part vigilante, one part criminal kingpin, Red Hood begins cleaning up Gotham with the efficiency of Batman, but without following the same ethical code. Killing is an option. And when the Joker falls in the balance between the two, hard truths are revealed and old wounds are reopened.", "Language": "English", "Country": "USA", "Awards": "1 nomination.", "Poster": "https://m.media-amazon.com/images/M/MV5BYTdlODI0YTYtNjk5ZS00YzZjLTllZjktYmYzNWM4NmI5MmMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.1/10" }, { "Source": "Rotten Tomatoes", "Value": "100%" }], "Metascore": "N/A", "imdbRating": "8.1", "imdbVotes": "46,972", "imdbID": "tt1569923", "Type": "movie", "DVD": "27 Jul 2010", "BoxOffice": "N/A", "Production": "WARNER BROTHERS PICTURES", "Website": "N/A", "Response": "True" },
  { "Title": "Batman: The Dark Knight Returns, Part 1", "Year": "2012", "Rated": "PG-13", "Released": "25 Sep 2012", "Runtime": "76 min", "Genre": "Animation, Action, Adventure, Crime, Drama, Sci-Fi, Thriller", "Director": "Jay Oliva", "Writer": "Bob Kane (character created by: Batman), Frank Miller (comic book), Klaus Janson (comic book), Bob Goodman", "Actors": "Peter Weller, Ariel Winter, David Selby, Wade Williams", "Plot": "Batman has not been seen for ten years. A new breed of criminal ravages Gotham City, forcing 55-year-old Bruce Wayne back into the cape and cowl. But, does he still have what it takes to fight crime in a new era?", "Language": "English", "Country": "USA", "Awards": "5 nominations.", "Poster": "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.0/10" }, { "Source": "Rotten Tomatoes", "Value": "100%" }], "Metascore": "N/A", "imdbRating": "8.0", "imdbVotes": "45,542", "imdbID": "tt2313197", "Type": "movie", "DVD": "25 Sep 2012", "BoxOffice": "N/A", "Production": "WARNER BROTHERS PICTURES", "Website": "https://www.facebook.com/BatmanTheDarkKnightReturns", "Response": "True" },
];


const EMPTY_OBJECT = {
  
};

export const MoviesApi = {
  /**
   * @param {Object} [options]
   * @param {String} [options.query] - query
   * @param {Number} [options.page] - page number
   * @param {Boolean} [options.detailedResult] - whether detailed results should be returned (with plot, etc.) Note: a lot of additional requests occurs
   * @return {Promise}
   */
  getMovies: (options = EMPTY_OBJECT) => {
    if (!options.numberOfEntities) {
      options.numberOfEntities = 10;
    }
    return new Promise((res) => {
      let result;
      if (options.detailedResult) {
        result = Promise.all(
          MOVIES.data.Search.slice(0, options.numberOfEntities).map(movie => MoviesApi.getMovieById(movie.imdbID))
        ).then((movies) => {
            return { data: {
              Search: movies.map(movie => movie.data),
              totalResults: MOVIES.data.totalResults,
              Response: MOVIES.data.Response,
            }};
          })
      } else {
        result = MOVIES;
      }
      res(result);
    })
  },
  getMovieById: (id) => new Promise((res, rej) => {
    const movie = MOVIE_DETAILS.find(m => m.imdbID === id);
    if (movie) {
      res({ data: movie });
    } else {
      rej({ err: 'movie not found'});
    }
  }),
  updateMovie: (movieId, movieData) => new Promise((res) => {
    // Not great, mutating objects, huh. But, well, can deal with that, that's just a moak.
    // Updating MOVIES
    const moviesList = MOVIES.data.Search;
    const movieIndex = moviesList.findIndex(m => m.imdbID === movieId);
    if (~movieIndex) {
      moviesList[movieIndex] = Object.assign({}, moviesList[movieIndex], movieData);
    }
    // Updating MOVIE_DETAILS
    const movieDetailsIndex = MOVIE_DETAILS.findIndex(m => m.imdbID === movieId);
    if (~movieDetailsIndex) {
      // console.log('MOVIE_DETAILS[movieDetailsIndex]', Object.assign({}, MOVIE_DETAILS[movieDetailsIndex], movieData));
      MOVIE_DETAILS[movieDetailsIndex] = Object.assign({}, MOVIE_DETAILS[movieDetailsIndex], movieData);
    }
    res({ data: Object.assign({}, moviesList[movieIndex]) });
  }),
}


export const MOVIE_PARAMS = {
  imdbID: 'imdbID',
  Plot: 'Plot',
  Title: 'Title',
  Poster: 'Poster',
  Year: 'Year',
}
export const DETAILED_FIELDS = [
  "Rated",
  "Released",
  "Runtime",
  "Genre",
  "Director",
  "Writer",
  "Actors",
  "Plot",
  "Language",
  "Country",
  "Awards",
  "Ratings",
  "Metascore",
  "imdbRating",
  "imdbVotes",
  "DVD",
  "BoxOffice",
  "Production",
  "Website",
  "Response"
];
