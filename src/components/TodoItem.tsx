import styled from "styled-components";

type Props = {
  id: number;
  contents: string;
  isComplete: boolean;
};

const TodoItem = ({ id, contents, isComplete }: Props) => {

  return (
    <Container>
      <CheckBox
        type='checkbox'
        checked={isComplete}
        onChange={() => toggleCompleteTodoItem(id, isComplete)}
      />
      {isComplete ? '완료' : '미완료'} {contents}
      <button onClick={() => deleteTodoItem(id)}>삭제</button>
    </Container>
  );

  function toggleCompleteTodoItem(id: number, isComplete: boolean) {
    // 에러 고려해서 클라이언트에서 완료/미완료 상태에 따라 서버에 다르게 요청
    if (isComplete) {
      console.log('완료 취소', id, isComplete);
    } else {
      console.log('완료 요청', id, isComplete);
    }
  }

  function deleteTodoItem(id: number) {
    console.log('삭제 요청', id);
  }
};

export default TodoItem;

const Container = styled.li`
  border: 1px solid #6A6A6A;
  background-color: #fff;
  border-radius: 7px;
  width: 350px;
  height: 40px;
  padding: 20px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & + & {
    margin-top: 10px;
  }
`

const CheckBox = styled.input`
  cursor: pointer;
`