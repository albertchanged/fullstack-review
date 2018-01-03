import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Repo from './components/Repo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  componentDidMount() {
    this.getRepos();
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    console.log(term);
    $.ajax({
      url: '/repos',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({'username': term}),
      success: (data) => {
        console.log('POST success: ', data);
        this.state.repos.concat(data);
        this.getRepos();
      },
      error: (data) => {
        console.log('POST error: ', data);
      }
    });
  }

  getRepos() {
    $.ajax({
      url: '/repos',
      method: 'GET',
      contentType: 'application/json',
      data: {'username': 'albertchanged'},
      success: (data) => {
        console.log('GET success: ', data);
        this.setState({
          repos: data
        });
      },
      error: (data) => {
        console.log('GET error: ', data);
      }
    });
  }

  render () {
    return (<div>
      {/* <img src="../client/dist/githublogo.png" /> */}
      <h1 className="githubHeader"><strong>GitHub</strong></h1>
      <h2 className="fetchbertHeader">&nbsp;/fetchbert</h2>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));