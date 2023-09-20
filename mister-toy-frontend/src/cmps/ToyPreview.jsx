export function ToyPreview({ toy }) {
  console.log("toy", toy);
  return (
    <li key={toy._id}>
      <h2>{toy.name}</h2>
      <strong>{toy.price}</strong>
    </li>
  );
}
