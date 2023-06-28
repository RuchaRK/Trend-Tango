import * as React from 'react';
import { Link } from 'react-router-dom';
import { PostsHeader } from './PostsHeader';
import { PostsFooter } from './PostsFooter';
import { PostMessageContainer } from '../Feed.style';
import { UserContext } from '../../Context/UserContext';
import { PostCommentsContainer, CommentsHeader, Comment } from './Posts.style';

export function Posts({ post, showComments }) {
  const { userLookUp } = React.useContext(UserContext);
  return (
    <div>
      <PostsHeader post={post} />
      <Link to={`/posts/${post._id}`}>
        <PostMessageContainer>
          <h2>posts to show</h2>
          <p>{post.content}</p>
        </PostMessageContainer>
      </Link>
      <PostsFooter post={post} />
      {showComments ? (
        <PostCommentsContainer>
          {post.comments.map((comment) => (
            <>
              <h3>Comments section</h3>
              <CommentsHeader>{comment.username}</CommentsHeader>
              <Comment> {comment.content}</Comment>
            </>
          ))}
        </PostCommentsContainer>
      ) : null}
    </div>
  );
}
