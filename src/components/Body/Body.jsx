import React from "react";

function Body({ meaning }) {
  // console.log(meaning);
  const { meanings, phonetics, word } = meaning[0];
  const { antonyms, definitions, partOfSpeech, synonyms } = meanings[0];

  const phonetic = phonetics.find((one) => one.audio.length > 0);
  console.log(phonetic);
  return (
    <div className="word">
      <div className="word__intro">
        <div className="word__intro-name">
          <h1>{word}</h1>
          <span>{phonetic.text}</span>
        </div>
        <div className="word__intro-play">
          <Play />
        </div>
      </div>

      {/* noun or verb different meanings will have to map */}
    </div>
  );
}

export default Body;

function Play() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
      viewBox="0 0 75 75"
    >
      <g fill="#A445ED" fillRule="evenodd">
        <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
        <path d="M29 27v21l21-10.5z" />
      </g>
    </svg>
  );
}
