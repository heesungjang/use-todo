# π A React Hook for 'Todo List'.

You just wanted to try new cool animation features or ui library and decided to build a simple todo app.

But, even for a simple todo application, you have to create mock states and functions to mutate the states such as addTodo, deleteTodo and so forth.

**Now 'use-todo' will give you everything!**

![](https://velog.velcdn.com/images/heesungj7/post/7b0062f3-3c14-4fe8-8a6a-d63d7d1b70e6/image.png)

## **Language Support**

**βοΈNote**: By default, <ins>todo item contents are in English</ins>. If you want to change contents to korean, provide `{ lang:"kr" }` to options.

**βοΈNote**: ν¬λ μμ΄νμ λ΄μ©μ κΈ°λ³Έμ μΌλ‘ <ins>μμ΄λ‘ μ€μ λμ΄ μμ΅λλ€</ins>. νκΈ μ§μμ μνμλ©΄ options κ°μΌλ‘ `{ lang:"kr" }`μ μ λ¬ν΄μ£ΌμΈμ.

### π See [Options](#en-options)

<hr/>

# Installation

Install with npm

```javascript
npm i use-todo
```

Install with yarn

```javascript
yarn add  use-todo
```

## English documentation

1. [How do you display todo list?](#en-header-1)
2. [How do you add new todo item to the list?](#en-header-2)
3. [How do you remove a todo item from the list?](#en-header-3)
4. [How do you edit a todo item from the list?](#en-header-4)
5. [How do you change completed state for a todo item?](#en-header-5)
6. [Options?](#en-options)

## Korean documentation

1. [κΈ°λ³Έ μ¬μ©λ²](#en-header-1)
2. [μμ΄νμ μ΄λ»κ² μΆκ°νλμ?](#en-header-2)
3. [μμ΄νμ μ΄λ»κ² μ­μ νλμ?](#en-header-3)
4. [μμ΄νμ μ΄λ»κ² μμ νλμ?](#en-header-4)
5. [μλ£ μνλ μ΄λ»κ² λ³κ²½νλμ?](#en-header-5)
6. [Options?](#en-options)

# Basic Usage

<a name="en-header-1"></a>

## 1οΈ. How do you display todo list?

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

<a name="en-header-2"></a>

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
        addTodo(newTodoItem); // π  add new todo item to current todo items state
    };
    return (
        <div>
            {/*π Here when button is clicked, 
            you can call addTodo function with title and content value*/}

            <button onClick={onButtonClick}>AddTodo</button>
            <input placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input placeholder="Enter content" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
    );
}

export default TodoComponent;
```

<a name="en-header-3"></a>

## 3. How do you remove a todo item from the list?

```javascript
import React from 'react';

import { useTodo } from './lib';

function TodoComponent() {
    const { todoItems, addTodo, deleteTodo, toggleCompletion } = useTodo();

    const onRemoveClicked = (id) => {
        // To remove a todo item from the todo list,
        deleteTodo(id); // π  pass a todo id to deleteTodo function
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

<a name="en-header-4"></a>

## 4. How do you edit a todo item from the list?

```javascript
// React
import React from 'react';
import { useTodo } from './lib';

function App() {
    const { todoItems, editTodo } = useTodo();

    const handleEdit = (id: string) => {
        // π Here you pass new todo data and id to editTodo function
        editTodo(id, { title: 'NEW TITLE', content: 'NEW CONTENT' });
    };

    return (
        <>
            {todoItems.map((todo) => {
                if (!todo.completed) {
                    return (
                        <div>
                            <span>{todo.title}</span>
                            <span>{todo.content}</span>
                            <button onClick={() => handleEdit(todo.id)}>Edit Todo</button>
                        </div>
                    );
                }
            })}
        </>
    );
}
```

<a name="en-header-5"></a>

## 5. How do you change completed state for a todo item?

```javascript
import React from 'react';

import { useTodo } from 'use-todo';

function TodoComponent() {
    const { todoItems, addTodo, deleteTodo, toggleCompletion } = useTodo();

    const handleComplete = (id: string) => {
        // change completed state of a todo item
        toggleCompletion(id); // π  pass a todo id to toggleCompletion function
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
                        <button onClick={() => handleComplete(todo.id)}>Complete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default TodoComponent;
```

<a name="en-options"></a>

# Options

```javascript
const options = {
    dataNum: 10, // π  Determines initial number of todo items in todo list
    contentLength: 20, // π  Determines the length of todo content
    useLocalStorage: true, // π  Stores todo list state to browser local storage
    lang: 'kr' // π  change default language for todo contents to korean
};
const { todoItems, addTodo, deleteTodo, toggleCompletion } = useTodo(options);
```
