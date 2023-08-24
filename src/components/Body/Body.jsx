import React, { useRef } from "react";
import Meaning from "./Meaning";

function Body({ meaning }) {
  if (!meaning) return;
  const audioRef = useRef(null);

  const { phonetics, word } = meaning[0];
  const phonetic = phonetics.find((one) => one.audio.length > 0);

  function handleAudio() {
    const audio = audioRef.current;
    audio.play();
  }

  return (
    <div className="word">
      <div className="word__intro">
        <div className="word__intro-name">
          <h1>{word}</h1>
          {phonetic && <span>{phonetic.text}</span>}
        </div>
        {phonetic && (
          <div className="word__intro-play">
            <Play onClick={handleAudio} />
            <audio ref={audioRef}>
              <source src={phonetic.audio} />
            </audio>
          </div>
        )}
      </div>

      {meaning.map((meanings) => (
        <>
          {meanings.meanings.map((each) => (
            <Meaning meaning={each} />
          ))}
        </>
      ))}
    </div>
  );
}

export default Body;

function Play({ onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
      viewBox="0 0 75 75"
      onClick={onClick}
    >
      <g fill="#A445ED" fillRule="evenodd">
        <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
        <path d="M29 27v21l21-10.5z" />
      </g>
    </svg>
  );
}
