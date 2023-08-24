import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Body from "./components/Body/Body";
import NotFound from "./components/NotFound";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Test";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [meaning, setMeaning] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function getTranslation() {
      try {
        setIsLoading(true);
        const data = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`,
          { signal: controller.signal }
        );
        const res = await data.json();
        setMeaning(res);
        setIsLoading(false);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      }
    }

    if (searchQuery.length) {
      getTranslation();
    }

    return () => {
      controller.abort();
    };
  }, [searchQuery]);

  return (
    <div className="app container">
      <BrowserRouter>
        <Header />
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {isLoading && searchQuery.length > 0 && <Spinner />}

        {meaning.title && !isLoading && searchQuery.length > 1 && (
          <NotFound text={meaning} />
        )}

        <Routes>
          <Route
            path="/:word"
            element={
              !meaning.title &&
              !isLoading &&
              searchQuery.length > 1 && <Body meaning={meaning} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

function Spinner() {
  return (
    <div className="spinner">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          background: "white",
          display: "block",
          shapeRendering: "auto",
        }}
        width="80px"
        height="80px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <path
          d="M10 50A40 40 0 0 0 90 50A40 42.2 0 0 1 10 50"
          fill="#a445ed"
          stroke="none"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 50 51.1;360 50 51.1"
          />
        </path>
      </svg>
    </div>
  );
}
