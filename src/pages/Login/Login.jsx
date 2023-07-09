/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { LoginContainer, ImageContainer, LoginDataContainer, LoginData } from './Login.style';
import { LoginContext } from '../../Context/LoginContext';
import { routeName } from '../../App.routes';
import { Input, Title } from '../../Components/Input';
import { Button } from '../../Components/Button';

const guestLoginValues = { username: 'AnayaJain', password: 'AnayaJain123' };
export function Login() {
  const [loginData, setLoginData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const { allowLogin } = React.useContext(LoginContext);

  const checkCredentials = async (username, password) => {
    try {
      setIsLoading(true);
      const response = await fetch('api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();

      if (data.error || (data.errors && data.errors.length > 0)) {
        setIsError(true);
      }

      if (data) {
        allowLogin(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <LoginContainer>
        <ImageContainer>
          <img src="/images/Login.svg" alt="login" height="400px" width="300px" />
        </ImageContainer>
        <LoginDataContainer>
          <Title>TREND-TANGO</Title>
          <LoginData>
            <h3>Log in to Trend-Tango</h3>
            {isError && <p>UserName or Password Incorrect.</p>}
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={loginData.username}
              onChange={(event) =>
                setLoginData({ ...loginData, [event.target.name]: event.target.value })
              }
            />

            <Input
              type="password"
              name="password"
              value={loginData.password}
              placeholder=" Password"
              onChange={(event) =>
                setLoginData({ ...loginData, [event.target.name]: event.target.value })
              }
            />
            <Button
              fullWidth
              type="button"
              disabled={isLoading}
              onClick={() => checkCredentials(loginData.username, loginData.password)}
            >
              {isLoading ? 'Logging in' : 'Login'}
            </Button>
            <Button
              fullWidth
              type="button"
              disabled={isLoading}
              onClick={() => {
                setLoginData({
                  username: guestLoginValues.username,
                  password: guestLoginValues.password
                });
                checkCredentials(guestLoginValues.username, guestLoginValues.password);
              }}
            >
              Guest Login
            </Button>
            <Link style={{ textDecoration: 'none' }} to={routeName.SIGNIN}>
              New Here? SignUp
            </Link>
          </LoginData>
        </LoginDataContainer>
      </LoginContainer>
    </div>
  );
}
