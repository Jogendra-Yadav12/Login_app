import {createBrowserRouter,RouterProvider} from 'react-router-dom';
// import all components
import PageNotFound from './components/PageNotFound';
import Password from './components/Password';
import Practice from './components/Practice';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Register from './components/Register';
import Reset from './components/Reset';
import Username from './components/Username';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Username />
  },
  {
    path : '/register',
    element : <Register />
  },
  {
    path : '/reset',
    element : <Reset />
  },
  {
    path : '/recovery',
    element : <Recovery />
  },
  {
    path : '/profile',
    element : <Profile />
  },
  {
    path : '/password',
    element : <Password />
  },
  {
    path : '/*',
    element : <PageNotFound />
  },
  {
    path : '/practice',
    element : <Practice />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
