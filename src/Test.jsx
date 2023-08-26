import React from "react";
import { useParams } from "react-router-dom";

function Test() {
  const { test } = useParams();
  return <div>{test} </div>;
}

export default Test;
