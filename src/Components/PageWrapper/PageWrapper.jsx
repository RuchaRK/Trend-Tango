import PropTypes from 'prop-types';
import * as React from 'react';
import { useContext } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { MdOutlineExplore } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { routeName } from '../../App.routes';
import { LoginContext } from '../../Context/LoginContext';
import { Header } from '../Header';
import { UserCard } from '../UserCard/UserCard';
import {
  CenterContainer,
  HomeContainer,
  IconContainer,
  LeftContainer,
  Option,
  OptionItems,
  RightContainer,
  Title
} from './PageWrappers.style';
import { UserList } from './UserList';
import { Loader } from '../Loader';
import { PageError } from '../PageError';

export function PageWrapper({ children, title, loading, error }) {
  const { logout, currentUser } = useContext(LoginContext);

  // eslint-disable-next-line no-nested-ternary
  const content = loading ? <Loader /> : error ? <PageError /> : children;

  return (
    <>
      <Header />
      <HomeContainer>
        <LeftContainer>
          <OptionItems>
            <UserCard
              firstName={currentUser.firstName ?? ''}
              lastName={currentUser.lastName ?? ''}
              userName={currentUser.username}
              id={currentUser._id}
              imgUrl={currentUser.imgUrl}
            />
            <NavLink
              NavLink
              to={routeName.HOME}
              style={({ isActive }) => ({
                color: isActive ? '#150AA1' : '#686868'
              })}>
              <Option>
                <IconContainer>
                  <AiOutlineHome size={20} />
                </IconContainer>
                Home
              </Option>
            </NavLink>

            <NavLink
              to={routeName.EXPLORE}
              style={({ isActive }) => ({
                color: isActive ? '#150AA1' : '#686868'
              })}>
              <Option>
                <IconContainer>
                  <MdOutlineExplore size={20} />
                </IconContainer>
                Explore
              </Option>
            </NavLink>

            <NavLink
              to={routeName.BOOKMARK}
              style={({ isActive }) => ({
                color: isActive ? '#150AA1' : '#686868'
              })}>
              <Option>
                <IconContainer>
                  <BsFillBookmarkFill size={16} />
                </IconContainer>
                BookMark
              </Option>
            </NavLink>
            <NavLink
              to={routeName.LOGIN}
              style={({ isActive }) => ({
                color: isActive ? '#150AA1' : '#686868'
              })}>
              <Option onClick={logout}>
                <IconContainer>
                  <BiLogOut size={20} />
                </IconContainer>
                Logout
              </Option>
            </NavLink>
          </OptionItems>
        </LeftContainer>

        <CenterContainer>
          <Title>{title}</Title>
          {content}
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
