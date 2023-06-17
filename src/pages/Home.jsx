/* eslint-disable no-console */
import * as React from 'react';
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';
import { Header } from '../Components/Header';
import {
  HomeContainer,
  OptionsContainer,
  FeedContainer,
  UserContainer,
  LoggedUser
} from './Home.style';
import { Feed } from './Feed';

// import { UserContext } from '../Context/UserContext';

export function Home() {
  const { logout } = useContext(LoginContext);

  return (
    <div style={{ height: '100%' }}>
      <Header />
      <HomeContainer>
        <OptionsContainer>
          <div>
            <h3>Home</h3>
            <h3>Explore</h3>
            <h3>Bookmark</h3>
            <h3>Profile</h3>
            <button onClick={logout}>Logout</button>
          </div>
          <LoggedUser>
            <h1>hi</h1>
          </LoggedUser>
        </OptionsContainer>
        <FeedContainer>
          <h2>feed</h2>
          <Feed />
        </FeedContainer>
        <UserContainer>
          <h2>users</h2>
        </UserContainer>
      </HomeContainer>
    </div>
  );
}
