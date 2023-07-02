import * as React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { FaRegCommentAlt } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import { LoginContext } from '../../Context/LoginContext';
import { usePostApis } from '../../Hook/usePostApis';
import { IconContainer } from '../Feed/Feed.style';
import { IconButton } from '../IconButton';
import { CommenstModal } from './CommentsModal';

export function PostFooter({ post }) {
  const { currentUser, userBookmarks } = React.useContext(LoginContext);
  const { dislikeAPost, likeAPost, removeBookMarkedPost, bookMarkAPost } = usePostApis();
  const isPostLikedByUser = post.likes.likedBy.find((item) => item._id === currentUser._id);
  const isPostBookmarked = userBookmarks.find((item) => item._id === post._id);
  const [modalIsOpen, setIsOpen] = React.useState(false);

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
          <IconButton
            onClick={() => (isPostLikedByUser ? dislikeAPost(post._id) : likeAPost(post._id))}>
            {isPostLikedByUser ? (
              <>
                <AiFillHeart size={25} />
                {post.likes.likeCount > 0 && post.likes.likeCount}
              </>
            ) : (
              <AiOutlineHeart size={25} />
            )}
          </IconButton>
          <IconButton onClick={() => openModal()}>
            <FaRegCommentAlt size={20} />
          </IconButton>

          <IconButton
            onClick={() =>
              isPostBookmarked ? removeBookMarkedPost(post._id) : bookMarkAPost(post._id)
            }>
            {isPostBookmarked ? <BsFillBookmarkFill size={20} /> : <BsBookmark size={20} />}
          </IconButton>
          <IconButton>
            <FiShare2 size={20} />
          </IconButton>
        </>
      )}
      {/* <Modal isOpen={modalIsOpen}>
        <h4>Post Replay</h4>
        <input
          style={{ padding: '15px 15px' }}
          type="text"
          placeholder="Add your comments ...."
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <Button
          onClick={() =>
            addComments(post._id, {
              comments: [{ _id: uuid(), content: comment, username: post.username }]
            })
          }>
          Comment
        </Button>
        <Button onClick={() => closeModal()}>Cancel</Button>
      </Modal> */}
      <CommenstModal isOpen={modalIsOpen} closeModal={() => closeModal()} post={post} />
    </IconContainer>
  );
}
