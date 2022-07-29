// REACT
import React, { useReducer } from "react";

// External Libraries
import { v4 as uuidv4 } from "uuid";
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
  id: string;
  title: string;
  // content: string;
  // date: Date;
  // completed: boolean;
};
type TodoListState = TodoItem[];

//-------------------------------------------------------------//
const todoReducer = (state: TodoListState, action: TodoAction) => {
  switch (action.type) {
    case TodoActionKind.ADD: {
      return state;
    }

    case TodoActionKind.DELETE: {
      return state;
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const generateTodoList = (dataNum: number): TodoListState => {
  const phaseGen = new PhaseGen();
  const phaseGenCustom = new PhaseGen({ customNouns: ["키우기", "만들기", "찾기"] });

  const todoList = Array(dataNum)
    .fill(0)
    .map(() => {
      return {
        id: uuidv4(),
        title: phaseGen.getNoun() + " " + phaseGenCustom.getNoun(),
      };
    });

  return todoList;
};

const useTodoMock = ({ dataNum }: Options) => {
  const initialState = generateTodoList(dataNum);

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = () => {
    console.log("add");
  };
  const deleteTodo = () => {};
  const completeTodo = () => {};

  return { todoList: state, addTodo, deleteTodo, completeTodo };
};

export default useTodoMock;
