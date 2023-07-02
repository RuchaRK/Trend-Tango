import * as React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineExplore } from 'react-icons/md';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { Header } from '../Header';
import { Button } from '../Button';
import {
  HomeContainer,
  LeftContainer,
  Title,
  CenterContainer,
  RightContainer,
  Option,
  OptionItems,
  ImagePlaceholder,
  IconContainer
} from './PageWrappers.style';
import { LoginContext } from '../../Context/LoginContext';
import { routeName } from '../../App.routes';
import { UserContext } from '../../Context/UserContext';
import { UserList } from './UserList';
import { UserCard } from '../UserCard/UserCard';

export function PageWrapper({ children, title }) {
  const { logout, currentUser } = useContext(LoginContext);
  const { userLookUp } = React.useContext(UserContext);

  return (
    <>
      <Header />
      <HomeContainer>
        <LeftContainer>
          <OptionItems>
            <UserCard
              firstName={
                userLookUp[currentUser.username] ? userLookUp[currentUser.username].firstName : ''
              }
              lastName={
                userLookUp[currentUser.username] ? userLookUp[currentUser.username].lastName : ''
              }
              userName={currentUser.username}
              id={userLookUp[currentUser.username]._id}
            />
            <Link to={routeName.HOME}>
              <Option>
                <IconContainer>
                  <AiOutlineHome size={20} />
                </IconContainer>
                Home
              </Option>
            </Link>

            <Link to={routeName.EXPLORE}>
              <Option>
                <IconContainer>
                  <MdOutlineExplore size={20} />
                </IconContainer>
                Explore
              </Option>
            </Link>

            <Link to={routeName.BOOKMARK}>
              <Option>
                <IconContainer>
                  <BsFillBookmarkFill size={16} />
                </IconContainer>
                BookMark
              </Option>
            </Link>
            <Option onClick={logout}>
              <IconContainer>
                <BiLogOut size={20} />
              </IconContainer>
              Logout
            </Option>
          </OptionItems>
        </LeftContainer>

        <CenterContainer>
          <Title>{title}</Title>
          {children}
        </CenterContainer>

        <RightContainer>
          <UserList />
        </RightContainer>
      </HomeContainer>
    </>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.element.isRequired
};
