const uuid = require('uuid');

class Movie {
  constructor(movie) {
    this.id= uuid.v1();
    this.title = movie.title;
    this.category = movie.category;
    this.rating = movie.rating;
    this.image =
      movie.image ||
      "https://cdn.pixabay.com/photo/2016/07/04/02/37/question-mark-1495858_960_720.jpg";
  }
}

module.exports = Movie;
