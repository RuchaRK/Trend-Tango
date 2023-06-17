import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { setLoginToken, clearLoginToken } from '../LoginLocalStorage';
import { routeName } from '../App.routes';

export const LoginContext = React.createContext();

export function LoginContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState();
  const navigate = useNavigate();

  const allowLogin = (token) => {
    setIsLoggedIn(true);
    setLoginToken(token);
    navigate(routeName.HOME);
  };

  const logout = () => {
    setIsLoggedIn(false);
    clearLoginToken();
    navigate(routeName.LOGIN);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LoginContext.Provider value={{ isLoggedIn, allowLogin, logout }}>
      {children}
    </LoginContext.Provider>
  );
}
