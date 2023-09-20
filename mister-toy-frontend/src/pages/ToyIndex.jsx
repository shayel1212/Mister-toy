import { toyService } from "../services/toy.service";
import { useEffect, useState } from "react";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service";
import { ToyList } from "../cmps/ToyList";
import { useDispatch, useSelector } from "react-redux";
import { loadToys, removeToy, saveToy } from "../store/actions/toy.actions";
import { ToyFilter } from "../cmps/ToyFilter";
import { SET_FILTER_BY } from "../store/reducers/toy.reducer";

export function ToyIndex() {
  const filterBy = useSelector((storeState) => storeState.toyModule.filterBy);
  const isLoading = useSelector((storeState) => storeState.toyModule.isLoading);
  const toys = useSelector((storeState) => storeState.toyModule.toys);

  const dispatch = useDispatch();
  useEffect(() => {
    loadToys();
  }, [filterBy]);
  function onRemoveToy(toyId) {
    removeToy(toyId);
    // console.log({ toyId });
  }
  function onAddToy() {
    const toyToSave = {
      name: prompt("toy title?"),
      price: +prompt("price?"),
      labels: [],
      inStock: true,
      createdAt: new Date(),
    };
    saveToy(toyToSave)
      .then((savedToy) => {
        showSuccessMsg(`Toy added (id: ${savedToy._id})`);
      })
      .catch((err) => {
        console.log("Cannot add toy", err);
        showErrorMsg("Cannot add toy");
      });
  }
  function onEditToy(toy) {
    // console.log(toy);
    const price = +prompt("New price?", toy.price);
    const toyToSave = { ...toy, price };
    saveToy(toyToSave)
      .then((savedToy) => {
        showSuccessMsg(`Toy updated to price: $${savedToy.price}`);
      })
      .catch((err) => {
        console.log("Cannot update toy", err);
        showErrorMsg("Cannot update toy");
      });
  }
  function onSetFilter(filterBy) {
    dispatch({ type: SET_FILTER_BY, filterBy });
  }
  return (
    <div>
      <h3>Toys App</h3>
      <main>
        <button onClick={onAddToy}>Add Toy 🧸</button>
        <ToyFilter filterBy={filterBy} onSetFilter={onSetFilter} />
        {!isLoading ? (
          <ToyList
            onEditToy={onEditToy}
            onRemoveToy={onRemoveToy}
            toys={toys}
          />
        ) : (
          <div> Loading...</div>
        )}
      </main>
    </div>
  );
}
