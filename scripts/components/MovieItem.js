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
      <div style={this.state.hovered ? movieItemHoveredStyle : movieItemStyle}
        onClick={() => this.props.onMovieClick(id)}
        onMouseEnter={() => this.setState({hovered: true})}
        onMouseLeave={() => this.setState({hovered: false})}>
        <div >{title}</div>
        <div >{year}</div>
        <div >{type}</div>
        <div >{id}</div>
        <ButtonStar onMovieStar={() => this.props.onMovieStar(id)}/>
      </div>
    );
  }
}

MovieItem.propTypes = {
};
