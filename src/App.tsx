import SignIn from './pages/SignIn';
import Todo from './pages/Todo';
import SignUp from './pages/SignUp';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Todo />
      {/* <SignIn /> */}
      {/* <SignUp /> */}
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
