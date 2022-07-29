// REACT
import React, { useReducer } from "react";

// External Libraries
import { v4 as uuidv4 } from "uuid";
const PhaseGen = require("korean-random-words");

// Types
type Options = {
  dataNum: number;
};

type TodoItem = {
  id?: string;
  title: string;
  // content: string;
  // date: Date;
  // completed: boolean;
};
enum TodoActionKind {
  ADD = "ADD",
  DELETE = "DELETE",
}

type TodoAction =
  | { type: TodoActionKind.ADD; todo: TodoItem }
  | { type: TodoActionKind.DELETE; id: string };

type TodoListState = TodoItem[];

//-------------------------------------------------------------//
const todoReducer = (state: TodoListState, action: TodoAction): TodoListState => {
  // Adding new todo Item
  switch (action.type) {
    case TodoActionKind.ADD: {
      const { todo } = action;
      return [...state, { title: todo.title, id: uuidv4() }];
    }

    case TodoActionKind.DELETE: {
      return state;
    }
    default: {
      return state;
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

  const addTodo = (todo: TodoItem) => {
    dispatch({ type: TodoActionKind.ADD, todo });
  };
  const deleteTodo = () => {
    // console.log(10664581);
  };
  const completeTodo = () => {};

  return { todoList: state, addTodo, deleteTodo, completeTodo };
};

export default useTodoMock;
