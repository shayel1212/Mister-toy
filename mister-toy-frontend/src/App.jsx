import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ToyIndex } from "./pages/ToyIndex";
import { store } from "./store/store";
import { Provider } from "react-redux";
export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="main-layout app">
          <main>
            <Routes>
              <Route path="/" element={<ToyIndex />} />
            </Routes>
          </main>
        </section>
      </Router>
    </Provider>
  );
}
