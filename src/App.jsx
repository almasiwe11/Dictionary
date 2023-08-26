import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Body from "./components/Body/Body";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="app container">
      <BrowserRouter>
        <Header />
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <Routes>
          <Route path="/:word" element={<Body />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
