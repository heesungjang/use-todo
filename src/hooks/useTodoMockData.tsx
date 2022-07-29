// REACT
import React, { useReducer } from "react";

// External Libraries
const PhaseGen = require("korean-random-words");

// Types
type Options = {
  dataNum: number;
};

enum TodoActionKind {
  ADD = "ADD",
  DELETE = "DELETE",
}

type TodoAction = {
  type: TodoActionKind;
};

type TodoItem = {
  // id: number;
  title: string;
  // content: string;
  // date: Date;
  // completed: boolean;
};
type TodoListState = TodoItem[];

//-------------------------------------------------------------//
const todoReducer = (state: TodoListState, action: TodoAction) => {
  return state;
};

const generateTodoList = (dataNum: number): TodoListState => {
  const phraseGens = new PhaseGen();
  const todoList = Array(dataNum)
    .fill(0)
    .map(() => {
      return { title: phraseGens.getNoun() };
    });

  return todoList;
};

const useTodoMock = ({ dataNum }: Options) => {
  const initialState = generateTodoList(dataNum);

  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);
};

export default useTodoMock;
