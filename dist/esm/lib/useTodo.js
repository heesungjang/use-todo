// REACT
import { useEffect, useReducer } from 'react';
//ASSETS
import { nouns, adjectives, suffixes } from './words';
// External Libraries
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
const PhaseGen = require('korean-random-words');
var TodoActionKind;
(function (TodoActionKind) {
    TodoActionKind["ADD"] = "ADD";
    TodoActionKind["DELETE"] = "DELETE";
    TodoActionKind["COMPLETE"] = "COMPLETE";
})(TodoActionKind || (TodoActionKind = {}));
/**
 *
 */
const todoReducer = (state, action) => {
    switch (action.type) {
        case TodoActionKind.ADD: {
            const { todo } = action;
            return [...state, { id: uuidv4(), title: todo.title, content: todo.content, completed: todo.completed }];
        }
        case TodoActionKind.DELETE: {
            const { id: targetedItemId } = action;
            return [...state].filter((todo) => todo.id !== targetedItemId);
        }
        case TodoActionKind.COMPLETE: {
            const { id: targetedItemId } = action;
            return [...state].map((todo) => {
                if (todo.id === targetedItemId) {
                    return Object.assign(Object.assign({}, todo), { completed: !todo.completed });
                }
                return todo;
            });
        }
        default: {
            return state;
        }
    }
};
/**
 *
 */
const generateTitle = () => {
    const phaseGen = new PhaseGen();
    const phaseGenCustom = new PhaseGen({ customNouns: ['키우기', '만들기', '찾기'] });
    return phaseGen.getNoun() + ' ' + phaseGenCustom.getNoun();
};
/**
 *
 */
const generateContent = (contentLength) => {
    let content = `${nouns[Math.floor(Math.random() * nouns.length)]}는 `;
    while (content.length <= contentLength) {
        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        content += `${randomAdjective}${randomSuffix} `;
    }
    content += `${adjectives[Math.floor(Math.random() * adjectives.length)]}하다.`;
    return content;
};
/**
 *
 */
const generateTodoList = (dataNum, contentLength) => {
    const todoList = Array(dataNum)
        .fill(0)
        .map(() => {
        return {
            id: uuidv4(),
            title: generateTitle(),
            content: generateContent(contentLength),
            completed: false,
            date: moment().subtract(10, 'days').calendar()
        };
    });
    return todoList;
};
/**
 *
 */
const useTodo = ({ dataNum = 5, contentLength = 25, useLocalStorage = false } = {}) => {
    // JSON functions
    const serialize = JSON.stringify;
    const deserialize = JSON.parse;
    // Todo States
    const initialState = generateTodoList(dataNum, contentLength);
    const localStorageList = window.localStorage.getItem('todo-list');
    const [state, dispatch] = useReducer(todoReducer, localStorageList ? deserialize(localStorageList) : initialState);
    // Adding new todo item to the state
    const addTodo = (todo) => {
        dispatch({ type: TodoActionKind.ADD, todo });
    };
    // Removing a todo item from the state
    const deleteTodo = (id) => {
        dispatch({ type: TodoActionKind.DELETE, id });
    };
    // Toggle a todo item completion (true / false)
    const toggleCompletion = (id) => {
        dispatch({ type: TodoActionKind.COMPLETE, id });
    };
    // storing or removing todo-list from localStorage
    useEffect(() => {
        if (!useLocalStorage) {
            window.localStorage.removeItem('todo-list');
        }
        if (!useLocalStorage)
            return;
        window.localStorage.setItem('todo-list', serialize(state));
    }, [state, serialize, useLocalStorage]);
    return { todoItems: state, addTodo, deleteTodo, toggleCompletion };
};
export { useTodo };
//# sourceMappingURL=useTodo.js.map