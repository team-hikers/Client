type Props = {
  id: number;
  contents: string;
  isComplete: boolean;
};

const TodoItem = ({ id, contents, isComplete }: Props) => {
  return (
    <li>
      {isComplete ? '완료' : '미완료'} {contents}
    </li>
  );
};

export default TodoItem;
