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
  completed?: boolean;
};
enum TodoActionKind {
  ADD = "ADD",
  DELETE = "DELETE",
  COMPLETE = "COMPLETE",
}

type TodoAction =
  | { type: TodoActionKind.ADD; todo: TodoItem }
  | { type: TodoActionKind.DELETE; id: string }
  | { type: TodoActionKind.COMPLETE; id: string };

type TodoListState = TodoItem[];

//-------------------------------------------------------------//
const todoReducer = (state: TodoListState, action: TodoAction): TodoListState => {
  switch (action.type) {
    case TodoActionKind.ADD: {
      const { todo } = action;
      return [...state, { title: todo.title, id: uuidv4(), completed: todo.completed }];
    }

    case TodoActionKind.DELETE: {
      const { id: targetedItemId } = action;

      return [...state].filter((todo) => todo.id !== targetedItemId);
    }

    case TodoActionKind.COMPLETE: {
      const { id: targetedItemId } = action;

      return [...state].map((todo) => {
        if (todo.id === targetedItemId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
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
        completed: false,
      };
    });

  return todoList;
};

//
const useTodoMock = ({ dataNum }: Options) => {
  const initialState = generateTodoList(dataNum);

  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Adding new todo item to the state
  const addTodo = (todo: TodoItem) => {
    dispatch({ type: TodoActionKind.ADD, todo });
  };

  // Removing a todo item from the state
  const deleteTodo = (id: string) => {
    dispatch({ type: TodoActionKind.DELETE, id });
  };
  const toggleTodo = (id: string) => {
    dispatch({ type: TodoActionKind.COMPLETE, id });
  };

  return { todoList: state, addTodo, deleteTodo, toggleTodo };
};

export default useTodoMock;
