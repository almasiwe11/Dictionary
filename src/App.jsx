import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Body from "./components/Body/Body";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
} from "react-router-dom";

function App() {
  const [theWord, setTheWord] = useSearchParams();

  return (
    <div className="app container">
      <Header />
      <Search setTheWord={setTheWord} theWord={theWord} />

      <Routes>
        {theWord.size && (
          <Route path="/" element={<Body theWord={theWord} />}></Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
