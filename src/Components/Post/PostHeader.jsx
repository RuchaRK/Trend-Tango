import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import * as React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDeleteOutline, MdOutlineModeEditOutline } from 'react-icons/md';
import { LoginContext } from '../../Context/LoginContext';
import { UserContext } from '../../Context/UserContext';
import { usePostApis } from '../../Hook/usePostApis';
import { getRelativeFormattedDate } from '../../dateUtils';
import { UserInfoContainer } from '../Feed/Feed.style';
import { ImageTextContainer } from '../PageWrapper/PageWrappers.style';
import { UserCard } from '../UserCard/UserCard';
import { EditPostModal } from './EditPostModal';
import { DateContainer, PostDateContainer } from './Post.style';
import { useUserApis } from '../../Hook/useUserApis';

export function PostHeader({ post, navigateToHomeOnDelete }) {
  const { userLookUp } = React.useContext(UserContext);
  const { currentUser } = React.useContext(LoginContext);
  const { unFollowAUser } = useUserApis();
  const { deletePost } = usePostApis();
  const [openModal, setOpenModal] = React.useState(false);
  const navigate = useNavigate();
  const userDetails =
    post.username === currentUser.username ? currentUser : userLookUp[post.username];

  const openEditModal = () => {
    setOpenModal(true);
  };

  const closeEditModal = () => {
    setOpenModal(false);
  };

  return (
    <UserInfoContainer>
      <PostDateContainer>
        <UserCard
          firstName={userDetails?.firstName ?? ''}
          lastName={userDetails?.lastName ?? ''}
          userName={post.username}
          id={userDetails?._id ?? ''}
          imgUrl={userDetails?.imgUrl}
        />
        <span style={{ color: 'grey' }}>.</span>
        <DateContainer> {getRelativeFormattedDate(post.createdAt)}</DateContainer>
      </PostDateContainer>

      <Menu
        menuButton={
          <MenuButton
            style={{
              borderRadius: '50%',
              height: '20px',
              width: '20px',
              background: '#FFF',
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #B0B0B0',
              justifyContent: 'center'
            }}
          >
            <BsThreeDots />
          </MenuButton>
        }
      >
        {post.username === currentUser.username ? (
          <>
            <MenuItem onClick={() => openEditModal()}>
              <ImageTextContainer>
                <MdOutlineModeEditOutline />
                Edit
              </ImageTextContainer>
            </MenuItem>
            <MenuItem
              onClick={() => {
                deletePost(post._id);
                if (navigateToHomeOnDelete) {
                  navigate('/');
                }
              }}
            >
              <ImageTextContainer>
                <MdOutlineDeleteOutline />
                Delete
              </ImageTextContainer>
            </MenuItem>
          </>
        ) : (
          <MenuItem onClick={() => unFollowAUser(userLookUp[post.username]._id)}>UnFollow</MenuItem>
        )}
      </Menu>

      <EditPostModal isOpen={openModal} closeModal={() => closeEditModal()} post={post} />
    </UserInfoContainer>
  );
}
