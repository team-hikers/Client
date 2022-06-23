import { useState } from 'react';
import styled from 'styled-components';

const SignUp = () => {
  const [signUpData, setsignUpData] = useState({
    id: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <Container>
      <h2>회원가입</h2>
      <Input type='text' name='id' placeholder='아이디' onChange={handleChange} />
      <Input type='password' name='password' placeholder='비밀번호' onChange={handleChange} />
      <Input type='password' name='confirmPassword' placeholder='비밀번호 확인' onChange={handleChange} />
      <Button onClick={handleClick}>회원가입</Button>
      <p>
        이미 회원이라면? 
        <button
          onClick={() => {
            console.log('로그인 페이지로 이동');
          }}
        >
          로그인
        </button>
      </p>
    </Container>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 350px;
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