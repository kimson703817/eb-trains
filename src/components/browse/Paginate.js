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

  onPageNumberClick = ({ target }) => {
    const activePage = parseInt(target.getAttribute('pagenumber'));
    this.setState({ activePage });
  };

  // componentDidUpdate(prevProps) {
  //   if (prevProps.items !== this.props.items) {
  //     console.log(prevProps.items);
  //     console.log(this.props.items);
  //     this.setState({ activePage: 1 });
  //     return;
  //   }
  // }

  renderPageTab = (page, className) => (
    <li key={`paginateKey${page}`} className={className}>
      <a
        className="page-link"
        href={`#${page}`}
        onClick={this.onPageNumberClick}
        pagenumber={page}
      >
        {page}
      </a>
    </li>
  );

  renderPageNumbers = pageCounts => {
    const hrefLink = '#';
    let pageNumbers = [];
    const keyTemplate = 'paginateKey';

    for (let page = 1; page <= pageCounts; ++page) {
      if (page === this.state.activePage) {
        pageNumbers.push(this.renderPageTab(page, 'page-item active'));
        continue;
      }
      pageNumbers.push(this.renderPageTab(page, 'page-item'));
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
