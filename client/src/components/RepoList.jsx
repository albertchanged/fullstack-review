import React from 'react';
import Repo from './Repo.jsx';
const RepoList = (props) => {
  return (
    <div className="repoList">
      <h4>Check out these awesome repositories!</h4>
      <p>There are {props.repos.length} repos below.</p>
      <div className="repoListBody">
      {
        props.repos.map((repo) => (
          <Repo
            repo={repo}
            key={repo.id}
          />
        ))
      }
      </div>
    </div>
  );
}

export default RepoList;