import React from 'react';
const Repo = (props) => (
  <div>
    <p><strong>Repo Owner:</strong> {props.repo.owner}
    <br /><strong>Repo Name:</strong> {props.repo.name}
    <br /><strong>Repo ID:</strong> {props.repo.id}
    <br /><strong>Creation Date:</strong> {props.repo.created_at.slice(0, props.repo.created_at.indexOf('T'))}
    <br /><strong>Repo Address:</strong> <a href={props.repo.url}>{props.repo.url}</a>
    </p>
  </div>
)

export default Repo;