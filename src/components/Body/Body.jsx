import React, { useRef, useState, useEffect } from "react";
import Meaning from "./Meaning";
import Found from "./Found";
import { useParams } from "react-router-dom";
import NotFound from "../../components/NotFound";

function Body() {
  const [meaning, setMeaning] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [noMatch, setNoMatch] = useState(false);

  const { word } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    async function getTranslation() {
      try {
        setIsLoading(true);
        const data = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
          { signal: controller.signal }
        );
        const res = await data.json();
        setMeaning(res);
        console.log(res);
        res.title && setNoMatch(true);
        setIsLoading(false);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      }
    }

    if (word.length) {
      getTranslation();
    }

    return () => {
      controller.abort();
    };
  }, [word]);

  if (!meaning) return;
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : noMatch ? (
        <NotFound text={meaning} />
      ) : (
        <Found meaning={meaning} />
      )}
    </>
  );
}

export default Body;

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
