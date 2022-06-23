import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Todo from './pages/Todo';
import SignUp from './pages/SignIn';

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
    <div>
			<Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/signin' element={<SignIn />} />
        {/* <SignUp /> */}
      </Routes>
    </div>
  );
}

export default App;
