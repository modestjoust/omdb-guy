import React, {PropTypes} from 'react';
import ButtonStar from './ButtonStar';

export default class MovieDetails extends React.Component {
  constructor(props) {
    super(props);

    this.onMovieStar = this.onMovieStar.bind(this);
    this.isStarred = this.isStarred.bind(this);
  }

  onMovieStar() {
    if (!this.isStarred(this.props.movie)) {
      this.props.onMovieStar(this.props.movie)
    } else {
      this.props.onMovieUnstar(this.props.movie)
    }
  }

  isStarred(movie) {
    var index = this.props.starredMovies.findIndex((el, ind, arr) => {
      return movie.imdbID === el.imdbID;
    });
    return index >= 0;
  }

  render() {
    var isStarred = this.isStarred(this.props.movie);
    var movieDetailsStyle = {
      width: '100%',
      height: '100%',
      padding: '30px 0px 0px',
    }
    
    return (
      <div style={movieDetailsStyle}>
        <div className="container">
          <div className="row">
            <div className="column">
              <div>
                <img src={this.props.movie.Poster}/>
              </div>
            </div>
            <div className="column column-75">
              <div>
                <div className="row">
                  <div className="column">
                    <h1>{this.props.movie.Title}</h1>
                  </div>
                  <div className="column" style={{display: 'flex', flexDirection: 'row'}}>
                    <ButtonStar
                      onMovieStar={this.onMovieStar}
                      isStarred={isStarred}
                      isButton={true}
                    />
                    <button onClick={() => this.props.goBackToList()} className="button button-outline">Go back</button>
                  </div>
                </div>
                <h4>{this.props.movie.Actors}</h4>

                <div>
                  <p style={{fontSize: '.8em'}}>
                    Released: {this.props.movie.Year} <br></br>
                    Directed by: {this.props.movie.Director} <br></br>
                    Written by: {this.props.movie.Writer} <br></br>
                  </p>
                </div>

                <div>
                  <p style={{fontSize: '.8em'}}>
                    Genre: {this.props.movie.Genre} <br></br>
                    Rated: {this.props.movie.Rated} <br></br>
                    Country: {this.props.movie.Country} <br></br>
                    Language: {this.props.movie.Language} <br></br>
                    Runtime: {this.props.movie.Runtime} <br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="column">
              <p>{this.props.movie.Plot}</p>
            </div>

            <div className="column">
              <p>
                Awards: {this.props.movie.Awards} <br></br>
                Metascore rating: {this.props.movie.Metascore} <br></br>
                IMDB rating: {this.props.movie.imdbRating} <br></br>
              </p>
              <p>Less info: <a href={"http://www.imdb.com/title/" + this.props.movie.imdbID}>{this.props.movie.Title}</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
};
