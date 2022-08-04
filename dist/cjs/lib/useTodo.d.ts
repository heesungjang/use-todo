declare type Options = {
    dataNum?: number;
    contentLength?: number;
    useLocalStorage?: boolean;
    lang?: string;
};
declare type TodoItem = {
    id: string;
    title: string;
    content: string;
    date?: string;
    completed?: boolean;
};
declare type NewTodoItem = {
    title: string;
    content: string;
};
declare type TodoListState = TodoItem[];
/**
 *
 */
declare const useTodo: ({ dataNum, contentLength, useLocalStorage, lang }?: Options) => {
    todoItems: TodoListState;
    addTodo: ({ title, content }: NewTodoItem) => void;
    deleteTodo: (id: string) => void;
    editTodo: (id: string, newContents: {
        title?: string;
        content?: string;
    }) => void;
    toggleCompletion: (id: string) => void;
};
export { useTodo };
