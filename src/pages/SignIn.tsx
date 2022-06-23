import { useState } from 'react';
import styled from 'styled-components';

const SignIn = () => {
  const [loginData, setLoginData] = useState({
    id: '',
    password: '',
  });

  return (
    <Container>
      <h2>로그인</h2>
      <Input type='text' name='id' placeholder='아이디' onChange={handleChange} />
      <Input type='password' name='password' placeholder='비밀번호' onChange={handleChange} />
      <Button onClick={handleClick}>로그인</Button>
      <p>
        아직 회원이 아니라면?{' '}
        <button
          onClick={() => {
            console.log('회원가입 페이지로 이동');
          }}
        >
          회원가입
        </button>
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
  height: 300px;
`;

const Input = styled.input`
  border: 1px solid #6a6a6a;
  border-radius: 7px;
  width: 350px;
  height: 40px;
  padding: 20px 5px;
`;

const Button = styled.button`
  background-color: #6a6a6a;
  color: #fff;
  border-radius: 7px;
  width: 350px;
  height: 40px;
  transition: 0.2s;
  &:hover {
    filter: brightness(115%);
  }
  &:active {
    filter: brightness(85%);
  }
`;
