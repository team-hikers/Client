import { useState } from 'react';
import styled from 'styled-components';

const AddTodoItem = () => {
  const [inputText, setInputText] = useState('');

  return (
    <Container>
      <Input type='text' name='contents' onChange={handleChange} />
      <Button onClick={handleClick}>추가</Button>
    </Container>
  );

  function handleChange({ target: { value } }: { target: { value: string } }) {
    setInputText(value);
  }

  function handleClick() {
    console.log('추가 요청', inputText);
  }
};

export default AddTodoItem;

const Container = styled.div`
  margin-bottom: 10px;
`

const Input = styled.input`
  width: 270px;
  height: 40px;
  border: 1px solid #6A6A6A;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`

const Button = styled.button`
  width: 80px;
  height: 40px;
  background-color: #6A6A6A;
  color: #fff;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
`