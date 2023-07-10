import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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

  const allowLogin = ({user, encodedToken}) => {
    setIsLoggedIn(true);
    setLoginToken(encodedToken);
    setCurrentUser(user);
    setFollowers(user.followers);
    setFollowing(user.following);
    setUserBookmarks(user.bookmarks);
    navigate(routeName.HOME);
    toast.success('👋 It’s so good to have you back!!');
  };

  const logout = () => {
    setIsLoggedIn(false);
    clearLoginToken();
    navigate(routeName.LOGIN);
    toast.success('Logged-Out Successfully');
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
        setUserBookmarks,
        setFollowing,
        setCurrentUser
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
