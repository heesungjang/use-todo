//REACT
import React from "react";
import useTodoMock from "./hooks/useTodoMockData";

const App = () => {
  const { todoList, addTodo, deleteTodo, completeTodo } = useTodoMock({ dataNum: 5 });

  return (
    <div>
      {todoList.map((todo) => {
        return (
          <span style={{ display: "block" }} key={todo.id}>
            {todo.title}
          </span>
        );
      })}
      <button onClick={() => addTodo({ title: "추가한 아이템" })}>추가하기</button>
    </div>
  );
};

export default App;
