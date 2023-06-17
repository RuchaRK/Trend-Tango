import { React, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { LoginContext } from '../Context/LoginContext';
import { routeName } from '../App.routes';

export function RequiresAuth({ children }) {
  const { isLoggedIn } = useContext(LoginContext);
  const location = useLocation();

  return isLoggedIn ? children : <Navigate to={routeName.LOGIN} state={{ from: location }} />;
}
