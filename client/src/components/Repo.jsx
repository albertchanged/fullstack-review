import React from 'react';
const Repo = (props) => (
  <div>
    <p><strong>Name:</strong> <span className="repoLabels">{props.repo.name}</span>
    <br /><strong>Owner:</strong> <span className="repoLabels">{props.repo.owner}</span>
    <br /><strong>Date:</strong> <span className="repoLabels">{props.repo.created_at.slice(0, props.repo.created_at.indexOf('T'))}</span>
    <br /><strong>Link:</strong> <a href={props.repo.url} target="_blank"><strong>{props.repo.url}</strong></a>
    </p>
  </div>
)

export default Repo;