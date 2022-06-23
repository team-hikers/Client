import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Todo from './pages/Todo';
import SignUp from './pages/SignUp';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';

function App() {
  const navigate = useNavigate();
  const isToken = true;

  useEffect(() => {
		if (isToken) {
			navigate('/');
		} else {
			navigate('/signin');
		}
	}, [isToken]);

  return (
    <Container>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
