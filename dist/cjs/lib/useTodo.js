"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTodo = void 0;
// REACT
const react_1 = require("react");
//ASSETS
const words_1 = require("./words");
// External Libraries
const moment_1 = __importDefault(require("moment"));
const uuid_1 = require("uuid");
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
            return [...state, { id: (0, uuid_1.v4)(), title: todo.title, content: todo.content, completed: todo.completed }];
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
    let content = `${words_1.nouns[Math.floor(Math.random() * words_1.nouns.length)]}는 `;
    while (content.length <= contentLength) {
        const randomAdjective = words_1.adjectives[Math.floor(Math.random() * words_1.adjectives.length)];
        const randomSuffix = words_1.suffixes[Math.floor(Math.random() * words_1.suffixes.length)];
        content += `${randomAdjective}${randomSuffix} `;
    }
    content += `${words_1.adjectives[Math.floor(Math.random() * words_1.adjectives.length)]}하다.`;
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
            id: (0, uuid_1.v4)(),
            title: generateTitle(),
            content: generateContent(contentLength),
            completed: false,
            date: (0, moment_1.default)().subtract(10, 'days').calendar()
        };
    });
    return todoList;
};
/**
 *
 */
const useTodo = ({ dataNum = 5, contentLength = 25, useLocalStorage = false }) => {
    // JSON functions
    const serialize = JSON.stringify;
    const deserialize = JSON.parse;
    // Todo States
    const initialState = generateTodoList(dataNum, contentLength);
    const localStorageList = window.localStorage.getItem('todo-list');
    const [state, dispatch] = (0, react_1.useReducer)(todoReducer, localStorageList ? deserialize(localStorageList) : initialState);
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
    (0, react_1.useEffect)(() => {
        if (!useLocalStorage) {
            window.localStorage.removeItem('todo-list');
        }
        if (!useLocalStorage)
            return;
        window.localStorage.setItem('todo-list', serialize(state));
    }, [state, serialize, useLocalStorage]);
    return { todoItems: state, addTodo, deleteTodo, toggleCompletion };
};
exports.useTodo = useTodo;
//# sourceMappingURL=useTodo.js.map