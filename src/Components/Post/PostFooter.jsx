import * as React from 'react';
import { AiFillHeart, AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { LoginContext } from '../../Context/LoginContext';
import { usePostApis } from '../../Hook/usePostApis';
import { IconContainer } from '../Feed/Feed.style';
import { IconButton } from '../IconButton';
import { CommentsModal } from './CommentsModal';
import { ImageTextContainer } from '../PageWrapper/PageWrappers.style';

export function PostFooter({ post }) {
  const { currentUser, userBookmarks } = React.useContext(LoginContext);
  const { dislikeAPost, likeAPost, removeBookMarkedPost, bookMarkAPost } = usePostApis();
  const isPostLikedByUser = post.likes.likedBy.find(
    (username) => username === currentUser.username
  );
  const isPostBookmarked = userBookmarks.find((item) => item._id === post._id);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  console.log(isPostLikedByUser);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <IconContainer>
      {post && (
        <>
          <ImageTextContainer style={{ gap: '0', alignItems: 'center' }}>
            <IconButton
              onClick={() => (isPostLikedByUser ? dislikeAPost(post._id) : likeAPost(post._id))}>
              {isPostLikedByUser ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
            </IconButton>
            <span>{post.likes.likeCount > 0 && post.likes.likeCount}</span>
          </ImageTextContainer>
          <ImageTextContainer style={{ gap: '0', alignItems: 'center' }}>
            <IconButton onClick={() => openModal()}>
              <AiOutlineComment size={20} />
            </IconButton>
            <span>{post.comments.length > 0 && post.comments.length}</span>
          </ImageTextContainer>

          <IconButton
            onClick={() =>
              isPostBookmarked ? removeBookMarkedPost(post._id) : bookMarkAPost(post._id)
            }>
            {isPostBookmarked ? <BsFillBookmarkFill size={16} /> : <BsBookmark size={16} />}
          </IconButton>
        </>
      )}

      <CommentsModal isOpen={modalIsOpen} closeModal={() => closeModal()} post={post} />
    </IconContainer>
  );
}
