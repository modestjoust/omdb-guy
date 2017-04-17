import React, {PropTypes} from 'react';

export default class ButtonStar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var style = {

    }
    return (
      // <button className="button button-outline" onClick={() => this.props.onMovieStar()}>
        <i onClick={() => this.props.onMovieStar()} style={{color: 'goldenrod' , cursor: 'pointer'}} className="fa fa-star"></i>
      // </button>
    );
  }
}

ButtonStar.propTypes = {
};
