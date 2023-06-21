import * as React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import {
  HomeContainer,
  OptionsContainer,
  LoggedUser,
  FeedContainer,
  UserContainer
} from '../pages/Home.style';
import { LoginContext } from '../Context/LoginContext';
import { routeName } from '../App.routes';
import { UserContext } from '../Context/UserContext';
import { UserList } from '../pages/UserList';

export function PageWrapper({ children }) {
  const { logout, currentUser } = useContext(LoginContext);
  const { userLookUp } = React.useContext(UserContext);

  return (
    <>
      <Header />
      <HomeContainer>
        <OptionsContainer>
          <div>
            <h3>
              <Link to={routeName.HOME}>Home</Link>
            </h3>
            <h3>
              <Link to={routeName.EXPLORE}>Explore</Link>
            </h3>
            <h3>
              <Link to={routeName.BOOKMARK}>BookMark</Link>
            </h3>

            <h3>Profile</h3>
            <button onClick={logout}>Logout</button>
          </div>
          <LoggedUser>
            <p>
              {userLookUp[currentUser.username] && userLookUp[currentUser.username].firstName}
              {userLookUp[currentUser.username] && userLookUp[currentUser.username].lastName}
            </p>
            <p> @{userLookUp[currentUser.username] && userLookUp[currentUser.username].username}</p>
          </LoggedUser>
        </OptionsContainer>
        <FeedContainer>{children}</FeedContainer>
        <UserContainer>
          <UserList />
        </UserContainer>
      </HomeContainer>
    </>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.element.isRequired
};
