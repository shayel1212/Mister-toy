import { toyService } from "../services/toy.service";
import { useEffect, useState } from "react";
import { ToyList } from "../cmps/ToyList";
export function ToyIndex() {
  const [toys, setToys] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    toyService.query().then((toys) => {
      setToys(toys);
      setIsLoading(false);
    });
  }, []);
  return (
    <div>
      <h3>Toys App</h3>
      <main>
        <button>Add Toy 🧸</button>
        {!isLoading ? <ToyList toys={toys} /> : <div> Loading...</div>}
      </main>
    </div>
  );
}
