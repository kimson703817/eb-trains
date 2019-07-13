import React, { Component } from 'react';

// COMPONENTS

// NPM MODULES

class Paginate extends Component {
  // PROPS: items, itemsPerPage, onPageChange
  //

  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }

  async componentDidMount() {}

  componentWillUnmount() {}

  onPageNumberClick = () => {};

  renderPageNumbers = pageCounts => {
    const hrefLink = '#';
    let pageNumbers = [];
    const keyTemplate = 'paginateKey';

    for (let page = 1; page <= pageCounts; ++page) {
      if (page === this.state.activePage) {
        pageNumbers.push(
          <li key={keyTemplate + page} className="page-item active">
            <a className="page-link" href={hrefLink + `${page}`}>
              {page}
            </a>
          </li>
        );
        continue;
      }
      pageNumbers.push(
        <li key={keyTemplate + page} className="page-item">
          <a
            className="page-link"
            href={hrefLink + `${page}`}
            onClick={this.onPageNumberClick}
          >
            {page}
          </a>
        </li>
      );
    }
    return pageNumbers;
  };

  render() {
    const { items, itemsPerPage } = this.props;
    const pageCounts = Math.ceil(items.length / itemsPerPage);
    const pageNumbers = this.renderPageNumbers(pageCounts);
    return (
      <div>
        <nav>
          <ul className="pagination">{pageNumbers}</ul>
        </nav>
      </div>
    );
  }
}

export default Paginate;
