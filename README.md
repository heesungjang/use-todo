## 📒 A React Hook for 'Todo List'.

# Installation

Install with npm

```javascript
npm i use-todo
```

Install with yarn

```javascript
yarn add  use-todo
```

# Basic Usage

## 1️. How do you display todo list?

```javascript
import React from 'react';

import { useTodo } from 'use-todo';

function TodoComponent() {
    const { todoItems, addTodo, deleteTodo, toggleCompletion } = useTodo();

    return (
        <div>
            {todoItems.map((todo) => {
                return (
                    // Todo Item
                    <div key={todo.id}>
                        <span>{todo.title}</span>
                        <span>{todo.content}</span>
                        <span>{todo.date}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default TodoComponent;
```

## 2. How do you add new todo item to the list?

```javascript
import React from 'react';

import { useTodo } from './lib';

function TodoComponent() {
    const { todoItems, addTodo, deleteTodo, toggleCompletion } = useTodo();

    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    const onButtonClick = () => {
        const newTodoItem = { title, content };
        addTodo(newTodoItem); // 👈  add new todo item to current todo items state
    };
    return (
        <div>
            {/*👇 Here when button is clicked, 
            you can call addTodo function with title and content value*/}

            <button onClick={onButtonClick}>AddTodo</button>
            <input placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input placeholder="Enter content" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
    );
}

export default TodoComponent;
```

## 2. How do you remove a todo item from the list?

```javascript
import React from 'react';

import { useTodo } from './lib';

function TodoComponent() {
    const { todoItems, addTodo, deleteTodo, toggleCompletion } = useTodo();

    const onRemoveClicked = (id) => {
        // To remove a todo item from the todo list,
        deleteTodo(id); // 👈  pass a todo id to deleteTodo function
    };
    return (
        <div>
            {todoItems.map((todo) => {
                return (
                    // Todo Item
                    <div key={todo.id}>
                        <span>{todo.title}</span>
                        <span>{todo.content}</span>
                        <span>{todo.date}</span>
                        <button onClick={() => onRemoveClicked(todo.id)}>Remove Todo</button>
                    </div>
                );
            })}
        </div>
    );
}

export default TodoComponent;
```

## Typescript Use

# Options
