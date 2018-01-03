import React from 'react';
import Repo from './Repo.jsx';
const RepoList = (props) => {
  return (
    <div>
      <h4> Repo List Component </h4>
      <p>There are {props.repos.length} repos.</p>
      <div>
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