//REACT
import React from "react";
import useTodoMock from "./hooks/useTodoMockData";

const App = () => {
  const { todoList, addTodo, deleteTodo, completeTodo } = useTodoMock({ dataNum: 5 });

  return (
    <div>
      {todoList.map((todo) => {
        return (
          <div key={todo.id}>
            <span style={{ display: "block" }}>{todo.title}</span>
            <button
              id={todo.id}
              onClick={(e: React.MouseEvent<HTMLElement>) => deleteTodo(e.currentTarget.id)}
            >
              삭제하기
            </button>
          </div>
        );
      })}
      <button onClick={() => addTodo({ title: "추가한 아이템" })}>추가하기</button>
    </div>
  );
};

export default App;
