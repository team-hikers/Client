import styled from 'styled-components';
import AddTodoItem from '../components/AddTodoItem';
import TodoList from '../components/TodoList';

const Todo = () => {
  return (
    <Container>
      <Title>Todo</Title>
      <AddTodoItem />
      <TodoList />
    </Container>
  );
};

export default Todo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
		width: 5px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #A6A6A6;
		border-radius: 10px;
	}
`

const Title = styled.h2`
  margin-bottom: 10px;
`