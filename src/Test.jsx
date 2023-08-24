import React from "react";
import { useParams } from "react-router-dom";

function Test() {
  const { word } = useParams();
  return <div>{word} </div>;
}

export default Test;
