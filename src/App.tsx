//REACT
import React from "react";
import useTodoMock from "./hooks/useTodoMockData";

const App = () => {
  const { todoList, addTodo, deleteTodo, toggleTodo } = useTodoMock({
    dataNum: 5,
    contentLength: 20,
  });

  return (
    <div>
      {todoList.map((todo) => {
        if (!todo.completed) {
          return (
            <div key={todo.id}>
              <span style={{ display: "block" }}>{todo.title}</span>
              <button
                id={todo.id}
                onClick={(e: React.MouseEvent<HTMLElement>) => deleteTodo(e.currentTarget.id)}
              >
                삭제하기
              </button>
              <button
                id={todo.id}
                onClick={(e: React.MouseEvent<HTMLElement>) => toggleTodo(e.currentTarget.id)}
              >
                완료하기
              </button>
            </div>
          );
        }
      })}

      <button onClick={() => addTodo({ title: "추가한 아이템" })}>추가하기</button>

      <span style={{ display: "block" }}>Completed</span>

      {todoList.map((todo) => {
        if (todo.completed) {
          return (
            <div key={todo.id}>
              <span style={{ display: "block" }}>{todo.title}</span>
              <button
                id={todo.id}
                onClick={(e: React.MouseEvent<HTMLElement>) => deleteTodo(e.currentTarget.id)}
              >
                삭제하기
              </button>
              <button
                id={todo.id}
                onClick={(e: React.MouseEvent<HTMLElement>) => toggleTodo(e.currentTarget.id)}
              >
                취소하기
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default App;
