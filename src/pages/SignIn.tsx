import { useEffect, useState } from 'react';
import Button from '../components/Button';
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
    <div>
      <Input name='id' onChange={handleChange} />
      <Input name='password' onChange={handleChange} />
      <Button label='로그인' onClick={handleClick} />
    </div>
  );
  function handleChange({ target: { value, name } }: { target: { value: string; name: string } }) {
    setLoginData((prev) => ({ ...prev, [name]: value }));
  }

  function handleClick() {
    console.log('signin', loginData);
  }
};

export default SignIn;
