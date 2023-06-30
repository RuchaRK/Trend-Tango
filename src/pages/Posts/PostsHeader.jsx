import * as React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import { BsThreeDots } from 'react-icons/bs';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { MdOutlineModeEditOutline, MdOutlineDeleteOutline } from 'react-icons/md';
import { UserInfoContainer, UserData } from '../Feed.style';
import { UserContext } from '../../Context/UserContext';
import { LoginContext } from '../../Context/LoginContext';
import { Button } from '../../Components/Button';
import { usePostActions } from '../../Hook/usePostActions';
import { FeedContext } from '../../Context/FeedContext';
import { ImageContainer, ImageTextContainer } from '../Home.style';

export function PostsHeader({ post }) {
  const { userLookUp } = React.useContext(UserContext);
  const { currentUser } = React.useContext(LoginContext);
  const { setPostsToShow, postsToShow } = React.useContext(FeedContext);
  const { editPost, deletePost, unFollowAUser } = usePostActions();
  const [updatePostContent, setUpdatePostContent] = React.useState(post.content);

  const openEditModal = (postIdValue) => {
    setPostsToShow(
      postsToShow.map((item) =>
        item._id === postIdValue ? { ...item, isEdit: true } : { ...item }
      )
    );
  };

  const closeEditModal = (postIdValue) => {
    setPostsToShow(
      postsToShow.map((item) =>
        item._id === postIdValue ? { ...item, isEdit: false } : { ...item }
      )
    );
  };

  const updatePost = (postIdValue, postData) => {
    editPost(postIdValue, postData);
    closeEditModal(postIdValue);
  };

  return (
    <UserInfoContainer>
      <ImageTextContainer>
        <ImageContainer />
        <UserData>
          <p>
            {userLookUp[post.username] && userLookUp[post.username].firstName}
            {userLookUp[post.username] && userLookUp[post.username].lastName}
          </p>
          <p>@{post.username}</p>
        </UserData>
      </ImageTextContainer>

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
            }}>
            <BsThreeDots />
          </MenuButton>
        }>
        {post.username === currentUser.username ? (
          <>
            <MenuItem onClick={() => openEditModal(post._id)}>
              <ImageTextContainer>
                <MdOutlineModeEditOutline />
                Edit
              </ImageTextContainer>
            </MenuItem>
            <MenuItem onClick={() => deletePost(post._id)}>
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

      <Modal isOpen={post.isEdit}>
        <div>
          <textarea
            name="content"
            style={{ padding: '10px 10px' }}
            placeholder="Start posting the latest trend you have come across..."
            rows="6"
            cols="50"
            value={updatePostContent}
            onInput={(event) => setUpdatePostContent(event.target.value)}
          />
          <Button onClick={() => updatePost(post._id, { content: updatePostContent })}>
            Update
          </Button>
          <Button onClick={() => closeEditModal(post._id)}> Close</Button>
        </div>
      </Modal>
    </UserInfoContainer>
  );
}
