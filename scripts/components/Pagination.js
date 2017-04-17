import React, {PropTypes} from 'react';

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var page = this.props.page;
    var totalPages = Math.ceil(this.props.totalResults / 10);

    var style = {
      paddingTop: '20px',
      textAlign: 'right'
    }

    return (
      <div className="container" style={style}>
        <div className="row">
          <div className="column">
            <button disabled={page === 1} onClick={() => this.props.handlePageBack()}>
              <i className="fa fa-arrow-left"/>
            </button>
            <span style={{padding: '0px 14px'}}> {page} / {totalPages} </span>
            <button disabled={page === totalPages} onClick={() => this.props.handlePageForward()}>
              <i className="fa fa-arrow-right"/>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Pagination.propTypes = {
};
