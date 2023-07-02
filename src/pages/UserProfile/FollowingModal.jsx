import * as React from 'react';
import { SlUserUnfollow } from 'react-icons/sl';
import { IconButton } from '../../Components/IconButton';
import { Modal } from '../../Components/Modal';
import { SingleUserData, UserListContainer } from '../../Components/PageWrapper/PageWrappers.style';
import { UserCard } from '../../Components/UserCard/UserCard';
import { useUserApis } from '../../Hook/useUserApis';

export function FollowingModal({ followingUsers, isOpen, closeModal }) {
  const { unFollowAUser } = useUserApis();
  return (
    <Modal
      isOpen={isOpen}
      height="400px"
      width="300px"
      title="Following"
      closeModal={() => closeModal()}>
      <UserListContainer>
        {followingUsers.map((info) => (
          <SingleUserData style={{ border: 'none', padding: 'unset' }}>
            <UserCard
              firstName={info.firstName}
              lastName={info.lastName}
              userName={info.username}
              action={
                <IconButton onClick={() => unFollowAUser(info._id)}>
                  <SlUserUnfollow size={20} />
                </IconButton>
              }
            />
          </SingleUserData>
        ))}
      </UserListContainer>
    </Modal>
  );
}
