import React, {PropTypes} from 'react';

export default class ButtonStar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    this.props.onMovieStar();
  }

  render() {
    var style = {
      color: 'goldenrod',
      cursor: 'pointer'
    }
    return (
      <div className="column" style={{textAlign: 'right'}}>
        {this.props.isStarred ?
          <i onClick={this.handleClick} style={style} className="fa fa-star"></i>
          : <i onClick={this.handleClick} style={style} className="fa fa-star-o"></i>}
      </div>
    );
  }
}

ButtonStar.propTypes = {
};
