//REACT
import React from "react";
import useTodoMock from "./hooks/useTodoMockData";

const App = () => {
  const state = useTodoMock({ dataNum: 5 });

  return <div></div>;
};

export default App;
