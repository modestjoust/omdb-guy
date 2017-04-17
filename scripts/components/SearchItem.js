import React, {PropTypes} from 'react';

export default class SearchItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var searchItemLinkStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignContent: 'bottom',
      padding: '0px 10px'
    }
    return (
      <div style={{textAlign: 'center'}}>
        <a href="#" onClick={() => this.props.handleClick(this.props.data)}>
          <span style={searchItemLinkStyle}>
            {this.props.data.search}
            <span >{(new Date(this.props.data.dateTime)).toLocaleDateString()}</span>
          </span>
        </a>
      </div>);
  }
}

SearchItem.propTypes = {
};
