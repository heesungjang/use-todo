//REACT
import React from "react";
import useTodoMock from "./hooks/useTodoMockData";

const App = () => {
  const { todoList, addTodo, deleteTodo, toggleTodo } = useTodoMock({
    dataNum: 5,
    contentLength: 20,
    useLocalStorage: true,
  });

  return (
    <div>
      {todoList.map((todo) => {
        return (
          <div>
            <span style={{ display: "block" }}>{todo.title}</span>
            <span style={{ display: "block", marginBottom: "10px" }}>{todo.content}</span>
          </div>
        );
      })}
      <button onClick={() => addTodo({ title: "heeasd", content: "asdsa" })}>추가하기</button>
    </div>
  );
};

export default App;
