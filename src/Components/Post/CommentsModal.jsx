import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { Modal } from '../Modal';
import { usePostApis } from '../../Hook/usePostApis';
import { Button } from '../Button';

export function CommenstModal({ isOpen, closeModal, post }) {
  const { editPost } = usePostApis();
  const [comment, setComment] = React.useState('');

  const addComments = async (postIdValue, postData) => {
    await editPost(postIdValue, postData);
    setComment('');
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      height="auto"
      width="640px"
      title="Post Your Comment"
      closeModal={() => closeModal()}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '10px 10px' }}>
        <input
          style={{ padding: '15px 15px', borderRadius: '4px', border: '1px solid #e4e4e4' }}
          type="text"
          placeholder="Add your comments ...."
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <div style={{ display: 'flex', gap: '4px', justifyContent: 'flex-end' }}>
          <Button
            onClick={() =>
              addComments(post._id, {
                comments: post.comments
                  ? post.comments.concat({ _id: uuid(), content: comment, username: post.username })
                  : [{ _id: uuid(), content: comment, username: post.username }]
              })
            }>
            Comment
          </Button>
        </div>
      </div>
    </Modal>
  );
}
