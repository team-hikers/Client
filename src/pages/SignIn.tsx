import { useEffect, useState } from 'react';
import Input from '../components/Input';

const SignIn = () => {
  const [loginData, setLoginData] = useState({
    id: '',
    password: '',
  });

  useEffect(() => {
    console.log(loginData);
  }, [loginData]);
  return (
    <>
      <Input name='id' onChange={handleChange} />
      <Input name='password' onChange={handleChange} />
      <button onClick={handleClick}>로그인</button>
    </>
  );
  function handleChange({ target: { value, name } }: { target: { value: string; name: string } }) {
    setLoginData((prev) => ({ ...prev, [name]: value }));
  }

  function handleClick() {
    console.log('signin', loginData);
  }
};

export default SignIn;
