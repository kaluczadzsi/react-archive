import './Concept.css';

function Concept(props) {
  return (
    <div>
      <img src={props.data.image} alt="TODO: TITLE" />
      <h2>{props.data.title}</h2>
      <p>{props.data.description}</p>
    </div>
  );
}

export default Concept;
