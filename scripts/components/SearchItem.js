import React, {PropTypes} from 'react';

export default class SearchItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={() => this.props.handleClick(this.props.data)}>
        {this.props.data.search} {this.props.data.dateTime}
      </div>);
  }
}

SearchItem.propTypes = {
};
