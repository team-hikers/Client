import { useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input';

const AddTodoItem = () => {
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    console.log(inputText);
  }, [inputText]);
  return (
    <>
      <Input name='contents' onChange={handleChange} />
      <Button label='추가' onClick={handleClick} />
    </>
  );
  function handleChange({ target: { value } }: { target: { value: string } }) {
    setInputText(value);
  }

  function handleClick() {
    console.log('추가 요청', inputText);
  }
};

export default AddTodoItem;
