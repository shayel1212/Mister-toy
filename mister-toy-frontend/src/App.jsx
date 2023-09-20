import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ToyIndex } from "./pages/ToyIndex";
import { ToyDetails } from "./pages/ToyDetails";
export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="main-layout app">
          <main>
            <Routes>
              <Route path="/" element={<ToyIndex />} />
              <Route path="/:toyId" element={<ToyDetails />} />
            </Routes>
          </main>
        </section>
      </Router>
    </Provider>
  );
}
