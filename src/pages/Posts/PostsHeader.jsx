import * as React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import { UserInfoContainer, UserData } from '../Feed.style';
import { UserContext } from '../../Context/UserContext';
import { LoginContext } from '../../Context/LoginContext';
import { Button } from '../../Components/Button';
import { usePostActions } from '../../Hook/usePostActions';
import { FeedContext } from '../../Context/FeedContext';

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
      <UserData>
        <div>
          <p>
            {userLookUp[post.username] && userLookUp[post.username].firstName}
            {userLookUp[post.username] && userLookUp[post.username].lastName}
          </p>
        </div>
        <p>@{post.username}</p>
      </UserData>

      <div>
        {post.username === currentUser.username ? (
          <>
            {/* editPost(post._id) */}
            <Button onClick={() => openEditModal(post._id)}>Edit</Button>
            <Button onClick={() => deletePost(post._id)}>Delete</Button>
          </>
        ) : (
          <Button onClick={() => unFollowAUser(userLookUp[post.username]._id)}>UnFollow</Button>
        )}
      </div>
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
