import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      {/* <h4>Add more repos!</h4> */}
      Enter a GitHub username:<br /><input id="searchInput" value={this.state.term} onChange={this.onChange.bind(this)}/>       
      <br /><button id="searchButton" onClick={this.search.bind(this)}>Add Repos</button>
      <div className="errorCheck"></div>
    </div>) 
  }
}

export default Search;