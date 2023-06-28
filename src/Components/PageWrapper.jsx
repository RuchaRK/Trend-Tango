import * as React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineExplore } from 'react-icons/md';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { Header } from './Header';
import { Button } from './Button';
import {
  HomeContainer,
  OptionsContainer,
  LoggedUser,
  FeedContainer,
  UserContainer,
  Option,
  OptionItems,
  ImageContainer
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
          <OptionItems>
            <Link to={`/userProfile/${currentUser._id}`}>
              <Option>
                <ImageContainer />
                <div>
                  <p>
                    {userLookUp[currentUser.username] && userLookUp[currentUser.username].firstName}
                    {userLookUp[currentUser.username] && userLookUp[currentUser.username].lastName}
                  </p>
                </div>
              </Option>
            </Link>
            <Link to={routeName.HOME}>
              <Option>
                <AiOutlineHome size={20} /> Home
              </Option>
            </Link>

            <Link to={routeName.EXPLORE}>
              <Option>
                <MdOutlineExplore size={20} />
                Explore
              </Option>
            </Link>

            <Link to={routeName.BOOKMARK}>
              <Option>
                <BsFillBookmarkFill size={16} />
                BookMark
              </Option>
            </Link>
            <Option>
              <BiLogOut size={20} />

              <Button onClick={logout}>Logout</Button>
            </Option>
          </OptionItems>
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
