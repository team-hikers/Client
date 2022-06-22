import todos from '../dummys/todos.json';
import { Todo } from '../type';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <>
      {todos.map(({ id, contents, isComplete }: Todo) => (
        <TodoItem key={id} id={id} contents={contents} isComplete={isComplete} />
      ))}
    </>
  );
};

export default TodoList;
