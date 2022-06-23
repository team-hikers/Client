import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

const SignUp = () => {
  const [signUpData, setsignUpData] = useState({
    id: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    console.log(signUpData);
  }, [signUpData]);
  return (
    <>
      <Input name='id' onChange={handleChange} />
      <Input name='password' onChange={handleChange} />
      <Input name='confirmPassword' onChange={handleChange} />
      <Button label='회원가입' onClick={handleClick} />
    </>
  );
  function handleChange({ target: { value, name } }: { target: { value: string; name: string } }) {
    setsignUpData((prev) => ({ ...prev, [name]: value }));
  }

  function handleClick() {
    // 유효성 검사 -> 회원가입 요청 -> 로그인 페이지로 라우팅
    console.log('signin', signUpData);
  }
};

export default SignUp;
