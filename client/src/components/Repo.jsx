import React from 'react';
const Repo = (props) => (
  <div>
    <p><strong>Name: <a href={props.repo.url} target="_blank">{props.repo.name}</a></strong>
    <br /><strong>Owner:</strong> <span className="repoLabels">{props.repo.owner}</span>
    <br /><strong>Last Updated:</strong> <span className="repoLabels">{props.repo.updated_at.slice(0, props.repo.updated_at.indexOf('T'))}</span>
    </p>
  </div>
)

export default Repo;