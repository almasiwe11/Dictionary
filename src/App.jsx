import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Body from "./components/Body/Body";
import { useEffect, useState } from "react";
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [meaning, setMeaning] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function getTranslation() {
      const data = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`,
        { signal: controller.signal }
      );
      const res = await data.json();
      setMeaning(res);
    }

    getTranslation();

    return () => {
      controller.abort();
    };
  }, [searchQuery]);

  return (
    <div className="app container">
      <Header />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {meaning.length > 0 && <Body meaning={meaning} />}
    </div>
  );
}

export default App;
