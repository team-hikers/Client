import { useEffect, useState } from 'react';

const AddTodoItem = () => {
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    console.log(inputText);
  }, [inputText]);
  return (
    <>
      <input type='text' name='contents' onChange={handleChange} />
      <button onClick={handleClick}>추가</button>
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
