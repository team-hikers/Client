import SignIn from './pages/SignIn';
import Todo from './pages/Todo';
import SignUp from './pages/SignIn';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Todo />
      <SignIn />
      <SignUp />
    </>
  );
}

export default App;
