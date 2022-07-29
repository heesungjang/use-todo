//REACT
import React from "react";
import useTodoMock from "./hooks/useTodoMockData";

const App = () => {
  const { todoList, addTodo, deleteTodo, completeTodo } = useTodoMock({ dataNum: 5 });

  return (
    <div>
      {todoList.map((todo) => {
        return <span>{todo.title}</span>;
      })}
      <button onClick={() => addTodo()}>추가하기</button>
    </div>
  );
};

export default App;
