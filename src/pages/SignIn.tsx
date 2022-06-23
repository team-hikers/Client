import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';

const SignIn = () => {
  const [loginData, setLoginData] = useState({
    id: '',
    password: '',
  });

  return (
    <Container>
      <h2>로그인</h2>
      <Input name='id' placeholder='아이디' onChange={handleChange} />
      <Input name='password' placeholder='비밀번호' onChange={handleChange} />
      <Button label='로그인' onClick={handleClick} />
      <p>
        아직 회원이 아니라면? <button>회원가입</button>
      </p>
    </Container>
  );

  function handleChange({ target: { value, name } }: { target: { value: string; name: string } }) {
    setLoginData((prev) => ({ ...prev, [name]: value }));
  }

  function handleClick() {
    console.log('signin', loginData);
  }
};

export default SignIn;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  width: 500px;
  height: 400px;
  padding: 50px;
`;
