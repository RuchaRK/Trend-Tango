import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../Context/LoginContext';
import { UserContext } from '../../Context/UserContext';
import { UserCard } from '../UserCard/UserCard';
import {
  Comment,
  PostCommentsContainer,
  PostContainer,
  PostMessageContainer,
  Img
} from './Post.style';
import { PostFooter } from './PostFooter';
import { PostHeader } from './PostHeader';

export function Post({ post, showComments, navigateToHomeOnDelete }) {
  const { userLookUp } = React.useContext(UserContext);
  const { currentUser } = React.useContext(LoginContext);

  const navigate = useNavigate();
  return (
    <>
      <PostContainer>
        <PostHeader post={post} navigateToHomeOnDelete={navigateToHomeOnDelete} />

        <PostMessageContainer onClick={() => navigate(`/posts/${post._id}`)}>
          <p>{post.content}</p>
          {post.imgUrl && (
            <Img src={post.imgUrl} height="250px" width="250px" alt={post.username} />
          )}
        </PostMessageContainer>

        <PostFooter post={post} />
      </PostContainer>

      {showComments && post.comments?.length ? (
        <PostCommentsContainer>
          <h3 style={{ marginBottom: '16px' }}>Comments</h3>
          {post.comments.map((comment) => {
            const userDetails =
              comment.username === currentUser.username
                ? currentUser
                : userLookUp[comment.username];
            return (
              <div>
                <UserCard
                  firstName={userDetails.firstName}
                  lastName={userDetails.lastName}
                  userName={userDetails.username}
                  imgUrl={userDetails.imgUrl}
                  id={userDetails._id}
                />

                <Comment> {comment.content}</Comment>
              </div>
            );
          })}
        </PostCommentsContainer>
      ) : null}
    </>
  );
}
