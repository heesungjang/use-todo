declare type Options = {
    dataNum?: number;
    contentLength?: number;
    useLocalStorage?: boolean;
};
declare type TodoItem = {
    id?: string;
    title: string;
    content: string;
    date?: string;
    completed?: boolean;
};
declare type TodoListState = TodoItem[];
/**
 *
 */
declare const useTodo: ({ dataNum, contentLength, useLocalStorage }?: Options) => {
    todoItems: TodoListState;
    addTodo: (todo: TodoItem) => void;
    deleteTodo: (id: string) => void;
    toggleCompletion: (id: string) => void;
};
export { useTodo };
