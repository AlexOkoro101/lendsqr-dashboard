import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Middleware } from './components/common/auth/middleware';
import DefaultLayout from './components/layouts/default';
import AuthLayout from './components/layouts/auth';
import User from './pages/dashboard/user';
import Login from './pages/auth/login';

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route
          path="/"
          element={
            <Middleware>
              <User />
            </Middleware>
          }
        >

        </Route>
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
