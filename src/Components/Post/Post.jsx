import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PostHeader } from './PostHeader';
import { PostFooter } from './PostFooter';
import { PostMessageContainer } from '../Feed/Feed.style';
import { PostCommentsContainer, Comment, PostContainer } from './Post.style';
import { UserCard } from '../UserCard/UserCard';
import { UserContext } from '../../Context/UserContext';

export function Post({ post, showComments }) {
  const { userLookUp } = React.useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
      <PostContainer>
        <PostHeader post={post} />

        <PostMessageContainer onClick={() => navigate(`/posts/${post._id}`)}>
          <p>{post.content}</p>
        </PostMessageContainer>

        <PostFooter post={post} />
      </PostContainer>

      {showComments && post.comments?.length ? (
        <PostCommentsContainer>
          <h3 style={{ marginBottom: '16px' }}>Comments</h3>
          {post.comments.map((comment) => (
            <div>
              <UserCard
                firstName={userLookUp[comment.username].firstName}
                lastName={userLookUp[comment.username].lastName}
                userName={comment.username}
              />

              <Comment> {comment.content}</Comment>
            </div>
          ))}
        </PostCommentsContainer>
      ) : null}
    </>
  );
}
