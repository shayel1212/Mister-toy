import { useEffect, useRef, useState } from "react";
import { toyService } from "../services/toy.service.js";
import { utilService } from "../services/util.service.js";

export function ToyFilter({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy });

  onSetFilter = useRef(utilService.debounce(onSetFilter));

  useEffect(() => {
    // update father cmp that filters change very type
    onSetFilter.current(filterByToEdit);
  }, [filterByToEdit]);

  function handleChange({ target }) {
    let { value, name: field, type } = target;
    value = type === "number" ? +value || "" : value;
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }));
  }

  return (
    <section className="toy-filter full main-layout">
      <h2>toys Filter</h2>
      <form>
        <label htmlFor="title">title:</label>
        <input
          type="text"
          id="title"
          name="txt"
          placeholder="By title"
          value={filterByToEdit.txt}
          onChange={handleChange}
        />

        <label htmlFor="maxPrice">Max price:</label>
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
          placeholder="By max price"
          value={filterByToEdit.maxPrice}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
