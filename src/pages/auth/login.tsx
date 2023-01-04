import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FormButton } from '../../components/common/button';
import { FormInput } from '../../components/common/input';
import useAuth from '../../hooks/auth';

const Login = () => {
  // Get user data from context
  const { setIsLoading, setUser }: any = useAuth();

  // route hook
  const navigate = useNavigate();

  // Navigate to dashboard
  const login = () => {
    setIsLoading(true);
    navigate('/');
    setTimeout(() => {
      setUser('Alex');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login">
      <h4>Welcome!</h4>
      <h1>Enter details to login.</h1>

      <form className="login-form">
        <div className="form-content">
          <FormInput
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            onChange={() => {}}
          />

          <FormInput
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            onChange={() => {}}
          />

          <span className="forgot">
            Forgot Password?
          </span>

          <FormButton
            value="LOG IN"
            onClick={login}
            type="button"
            variation="default"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
