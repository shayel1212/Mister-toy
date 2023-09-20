import { ToyPreview } from "./ToyPreview";
export function ToyList({ toys, onRemoveToy, onEditToy }) {
  return (
    <ul>
      {toys.map((toy) => {
        return (
          <ToyPreview
            onEditToy={onEditToy}
            key={toy._id}
            onRemoveToy={onRemoveToy}
            toy={toy}
          />
        );
      })}
    </ul>
  );
}
