import * as React from 'react';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { usePostApis } from '../../Hook/usePostApis';
import { CreatePostContainer, PostInput, TextArea } from '../../pages/Home/Home.style';

export function EditPostModal({ isOpen, closeModal, post }) {
  const { editPost } = usePostApis();
  const [updatePostContent, setUpdatePostContent] = React.useState(post.content);

  const updatePost = async (postIdValue, postData) => {
    await editPost(postIdValue, postData);
    closeModal(postIdValue);
  };

  return (
    <Modal
      isOpen={isOpen}
      height="302px"
      width="800px"
      title="Edit Your Post"
      closeModal={() => closeModal()}>
      <CreatePostContainer>
        <PostInput>
          <TextArea
            name="content"
            placeholder="Start posting the latest trend you have come across..."
            value={updatePostContent}
            onInput={(event) => setUpdatePostContent(event.target.value)}
          />
        </PostInput>

        <Button onClick={() => updatePost(post._id, { content: updatePostContent })}>Update</Button>
      </CreatePostContainer>
    </Modal>
  );
}
