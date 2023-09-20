import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";
// import { userService } from "./user.service.js";
// import { httpService } from "./http.service.js";

// const BASE_URL = 'car/'
const STORAGE_KEY = "toyDB";

export const toyService = {
  query,
  getById,
  save,
  remove,
  getEmptyToy,
  getDefaultFilter,
};

function query(filterBy = {}) {
  return storageService.query(STORAGE_KEY, filterBy);
}

function getById(toyId) {
  return storageService.get(STORAGE_KEY, toyId);
}

function remove(toyId) {
  return storageService.remove(STORAGE_KEY, toyId);
  // return Promise.reject('Oh no!')
  //   return httpService.delete(BASE_URL + carId);
}

function save(toy) {
  if (toy._id) {
    return storageService.put(STORAGE_KEY, toy);
    // return httpService.put(BASE_URL, car);
  } else {
    return storageService.post(STORAGE_KEY, toy);
    // return httpService.post(BASE_URL, car);
  }
}

function getEmptyToy() {
  return {
    // vendor: "Susita-" + (Date.now() % 1000),
    // price: utilService.getRandomIntInclusive(1000, 9000),
    // speed: utilService.getRandomIntInclusive(50, 200),
    name: "",
    price: utilService.getRandomIntInclusive(10, 150),
    labels: [],
    createdAt: new Date(),
    inStock: true,
  };
}

function getDefaultFilter() {
  return { txt: "", maxPrice: "" };
}

// TEST DATA
// storageService.post(STORAGE_KEY, getEmptyToy()).then((x) => console.log(x));
