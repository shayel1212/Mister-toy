import { ToyPreview } from "./ToyPreview";
export function ToyList({ toys }) {
  console.log(toys);
  return (
    <ul>
      {toys.map((toy) => {
        return <ToyPreview key={toy._id} toy={toy} />;
      })}
    </ul>
  );
}
