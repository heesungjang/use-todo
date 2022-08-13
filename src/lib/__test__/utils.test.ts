import { generateTitle, generateContent, generateTodoList, generateTitleEN, generateContentEN, generateTodoListEN } from '../useTodo';

test('generating a title for todo', () => {
    const title = generateTitle();
    expect(typeof title === 'string');
});
