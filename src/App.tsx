import '../src/style/main.scss';
import { Route, Routes } from 'react-router-dom';
import { Middleware } from './components/common/auth/middleware';
import DefaultLayout from './components/layouts/default';
import AuthLayout from './components/layouts/auth';
import Users from './pages/dashboard/users';
import Login from './pages/auth/login';
import UserDetails from './pages/dashboard/users/userDetails';

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route
          path="/"
          element={
            <Middleware>
              <Users />
            </Middleware>
          }
        ></Route>
        <Route
          path="/user/:id"
          element={
            <Middleware>
              <UserDetails />
            </Middleware>
          }
        ></Route>
      </Route>
      <Route element={<AuthLayout />}>
        <Route
          path="/login"
          element={<Login />}
        ></Route>
      </Route>
    </Routes>
  );
};

export default App;
