import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import breedActions from "./store";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  return <div className="App">app</div>;
};

export default App;
