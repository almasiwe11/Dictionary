function Meaning({ meaning }) {
  const { antonyms, definitions, partOfSpeech, synonyms } = meaning;

  return (
    <div className="word__meanings">
      <div className="word__partOfSpeech">
        <h3>{partOfSpeech}</h3>
        <div className="word__hr"></div>
      </div>

      <div className="word__meaning">
        <p className="grey">Meaning</p>
        <ul className="word__meaning-list">
          {definitions.map((definition) => (
            <li key={definition.definition}>
              <div className="definition">
                <p>{definition.definition}</p>
                {definition.example && (
                  <p className="grey"> {definition.example}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {synonyms.length > 0 && (
        <div className="synonym">
          <p className="grey">Synonyms</p>{" "}
          {synonyms.map((syno) => (
            <span key={syno}>{syno},</span>
          ))}
        </div>
      )}

      {antonyms.length > 0 && (
        <div className="antonym">
          <p className="grey">Antonyms</p>{" "}
          {antonyms.map((antonim) => (
            <span key={antonim}>{antonim},</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Meaning;
