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

## 1️⃣ How do you use display todo list?

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

## 2️⃣ How do you new todo item to the list?

```javascript
import React from 'react';

import { useTodo } from './lib';

function TodoComponent() {
    const { todoItems, addTodo, deleteTodo, toggleCompletion } = useTodo({});

    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    const onButtonClick = () => {
        const newTodoItem = { title, content };
        addTodo(newTodoItem); // 👈  add new todo item to current todo items state
    };
    return (
        <div>
            {/*👇 Here when button is clicked, you can call addTodo function with title and content value*/}
            <button onClick={onButtonClick}>추가하기</button>

            <input placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />

            <input placeholder="Enter content" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
    );
}

export default TodoComponent;
```

## Typescript Use

# Options
