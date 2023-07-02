import * as React from 'react';
import { Modal } from '../../Components/Modal';
import { SingleUserData, UserListContainer } from '../../Components/PageWrapper/PageWrappers.style';
import { UserCard } from '../../Components/UserCard/UserCard';

export function FollowersModal({ isOpen, closeModal, followerUsers }) {
  return (
    <Modal
      isOpen={isOpen}
      height="400px"
      width="300px"
      title="Followers"
      closeModal={() => closeModal()}>
      <UserListContainer>
        {followerUsers.map((info) => (
          <SingleUserData style={{ border: 'none', padding: 'unset' }}>
            <UserCard
              firstName={info.firstName}
              lastName={info.lastName}
              userName={info.username}
            />
          </SingleUserData>
        ))}
      </UserListContainer>
    </Modal>
  );
}
