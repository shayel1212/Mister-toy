import { Link } from "react-router-dom";
export function ToyPreview({ toy, onRemoveToy, onEditToy }) {
  return (
    <li key={toy._id}>
      <h2>{toy.name}</h2>
      <strong>{toy.price}$</strong>
      <br />
      <button onClick={() => onRemoveToy(toy._id)}>X</button>
      <button onClick={() => onEditToy(toy)}>Edit</button>
      <hr />
      <Link to={`/${toy._id}`}>Details</Link>
    </li>
  );
}
