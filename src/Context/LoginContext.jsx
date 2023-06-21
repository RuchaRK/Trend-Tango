import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { setLoginToken, clearLoginToken } from '../LoginLocalStorage';
import { routeName } from '../App.routes';

export const LoginContext = React.createContext();

export function LoginContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState();
  const [currentUser, setCurrentUser] = React.useState({});
  const [followers, setFollowers] = React.useState([]);
  const [following, setFollowing] = React.useState([]);
  const [userBookmarks, setUserBookmarks] = React.useState([]);
  const navigate = useNavigate();

  const allowLogin = (data) => {
    setIsLoggedIn(true);
    setLoginToken(data.encodedToken);
    setCurrentUser({ _id: data.foundUser._id, username: data.foundUser.username });
    setFollowers(data.foundUser.followers);
    setFollowing(data.foundUser.following);
    setUserBookmarks(data.foundUser.bookmarks);
    navigate(routeName.HOME);
  };

  const logout = () => {
    setIsLoggedIn(false);
    clearLoginToken();
    navigate(routeName.LOGIN);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LoginContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        isLoggedIn,
        allowLogin,
        logout,
        currentUser,
        followers,
        following,
        userBookmarks,
        setUserBookmarks
      }}>
      {children}
    </LoginContext.Provider>
  );
}
