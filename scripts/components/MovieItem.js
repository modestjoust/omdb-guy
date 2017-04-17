import React, {PropTypes} from 'react';
import ButtonStar from './ButtonStar'

export default class MovieItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
      viewing: false
    }
  }

  render() {
    var title = this.props.data.Title
    var year = this.props.data.Year
    var type = this.props.data.Type
    var id = this.props.data.imdbID
    var starredDate = this.props.data.starredDate

    var movieItemStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottom: '1px solid #ddd',
      padding: '5px 0px 5px 0px'
    }

    var movieItemHoveredStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottom: '1px solid #ccc',
      padding: '5px 0px 5px 0px',
      backgroundColor: '#eee'
    }

    return (
      <div className="row" style={this.state.hovered ? movieItemHoveredStyle : movieItemStyle}
        onClick={() => this.props.onMovieClick(id)}
        onMouseEnter={() => this.setState({hovered: true})}
        onMouseLeave={() => this.setState({hovered: false})}>
        <div className="column column-60">{title}</div>
        <div className="column">{year}</div>
        {this.props.viewingStarred ?
          <div className="column">{(new Date(starredDate)).toLocaleDateString()}</div> :
          null
        }
        <ButtonStar
          onMovieStar={() => this.props.onMovieStar(this.props.data)}
          isStarred={this.props.isStarred}
        />
      </div>
    );
  }
}

MovieItem.propTypes = {
};
