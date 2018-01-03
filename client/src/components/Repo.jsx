const Repo = (props) => (
  <div>
    <p>ID: {props.repo.id}</p>
    <p>Name: {props.repo.name}</p>
    <p>Description: {props.repo.description}</p>
  </div>
)

export default Repo;