declare type Options = {
    dataNum: number;
    contentLength?: number;
    useLocalStorage?: boolean;
};
declare type TodoItem = {
    id?: string;
    title: string;
    content: string;
    date?: Date;
    completed?: boolean;
};
declare type TodoListState = TodoItem[];
/**
 *
 */
declare const useTodo: ({ dataNum, contentLength, useLocalStorage }: Options) => {
    todoList: TodoListState;
    addTodo: (todo: TodoItem) => void;
    deleteTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
};
export { useTodo };
