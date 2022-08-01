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
                    <div
                        key={todo.id}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid black'
                        }}
                    >
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

## Typescript Use

# Options
