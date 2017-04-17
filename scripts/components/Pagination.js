import React, {PropTypes} from 'react';

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var page = this.props.page;
    var totalPages = Math.ceil(this.props.totalResults / 10);
    return (
      <div>
        <button disabled={page === 1} onClick={() => this.props.handlePageBack()}></button>
        <span> {page} / {totalPages} </span>
        <button disabled={page === totalPages} onClick={() => this.props.handlePageForward()}></button>
      </div>
    );
  }
}

Pagination.propTypes = {
};
