import { useEffect, useState } from 'react';

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
      <input type='text' name='id' onChange={handleChange} />
      <input type='text' name='password' onChange={handleChange} />
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
