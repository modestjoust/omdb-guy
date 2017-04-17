import React, {PropTypes} from 'react';

export default class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('MovieDetails', this.props.movie)
    var movieDetailsStyle = {
      width: '100%',
      display: 'flex'
    }
    return (
      <div style={movieDetailsStyle}>
        <div>
          <img src={this.props.movie.Poster}/>
        </div>
        
        <div>
          <h1>{this.props.movie.Title}</h1>
          <h3>{this.props.movie.Actors}</h3>

          <div>
            <p>
              Released: {this.props.movie.Year} <br></br>
              Directed by: {this.props.movie.Director} <br></br>
              Written by: {this.props.movie.Writer} <br></br>
            </p>
          </div>

          <div>
            <p>
              Genre: {this.props.movie.Genre} <br></br>
              Rated: {this.props.movie.Rated} <br></br>
              Country: {this.props.movie.Country} <br></br>
              Language: {this.props.movie.Language} <br></br>
              Runtime: {this.props.movie.Runtime} <br></br>
            </p>
          </div>

          <div>
            <p>{this.props.movie.Plot}</p>
          </div>

          <div>
            <p>
              Awards: {this.props.movie.Awards} <br></br>
              Metascore rating: {this.props.movie.Metascore} <br></br>
              IMDB rating: {this.props.movie.imdbRating} <br></br>
            </p>
          </div>
          <div>
            <p>Less info: <a href={"http://www.imdb.com/title/" + this.props.movie.imdbID}>{this.props.movie.Title}</a></p>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
};
