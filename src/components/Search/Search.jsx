import React from "react";
import { useNavigate } from "react-router-dom";
function Search({ setTheWord, theWord }) {
  const navigate = useNavigate();

  function handleChange(e) {
    const val = e.target.value;
    navigate(`/?word=${encodeURIComponent(val)}`);
    setTheWord({ word: val });
  }

  const word = theWord.get("word");
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        value={word}
        onChange={handleChange}
      />
      <MagnifyingGlass />
    </div>
  );
}

export default Search;

function MagnifyingGlass() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <path
        fill="none"
        stroke="#A445ED"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
      />
    </svg>
  );
}
