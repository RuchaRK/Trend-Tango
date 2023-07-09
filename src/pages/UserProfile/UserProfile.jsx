/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../Components/Button';
import { Feed } from '../../Components/Feed/Feed';
import { PageWrapper } from '../../Components/PageWrapper/PageWrapper';
import {
  ImagePlaceholder,
  ImageTextContainer
} from '../../Components/PageWrapper/PageWrappers.style';
import { LoginContext } from '../../Context/LoginContext';
import { usePostApis } from '../../Hook/usePostApis';
import { EditModal } from './EditModal';
import {
  MetadataContainer,
  ProfileContainer,
  ProfileDataContainer,
  UserData,
  UserInfoGroup,
  UserMainContainer
} from './UserProfile.style';
import { FollowingModal } from './FollowingModal';
import { FollowersModal } from './FollowersModal';
import { FeedContext } from '../../Context/FeedContext';
import { useFetchApi } from '../../Hook/useFetchApi';

export function UserProfile() {
  const { id } = useParams();
  const { followUser, unFollowAUser } = usePostApis();
  const { currentUser, following, followers } = React.useContext(LoginContext);
  const { postsToShow } = React.useContext(FeedContext);
  const [isFollowingModalOpen, setIsFollowingModalOpen] = React.useState(false);
  const [isFollowersModalOpen, setIsFollowersModalOpen] = React.useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);

  const {
    data: { user },
    isError,
    isLoading,
    setData: setSingleUserData
  } = useFetchApi({ url: `/api/users/${id}`, dependencies: [id] });

  const singleUserData = user ?? {};

  function openFollowingModal() {
    setIsFollowingModalOpen(true);
  }

  function closeFollowingModal() {
    setIsFollowingModalOpen(false);
  }

  function openFollowersModal() {
    setIsFollowersModalOpen(true);
  }

  function closeFollowersModal() {
    setIsFollowersModalOpen(false);
  }

  function openEditModal() {
    setIsEditModalOpen(true);
  }

  function closeEditModal() {
    setIsEditModalOpen(false);
  }

  const selectedUserPosts = postsToShow.filter(
    (post) => post.username === singleUserData?.username
  );

  const isUserAlreadyFollowed = following.find((node) => node._id === singleUserData._id);

  const followingUsers =
    (singleUserData._id === currentUser._id ? following : singleUserData.following) ?? [];
  const followerUsers =
    (singleUserData._id === currentUser._id ? followers : singleUserData.followers) ?? [];

  return (
    <PageWrapper title={'Profile'} loading={isLoading} error={isError}>
      <UserMainContainer>
        <ProfileContainer>
          <ProfileDataContainer>
            <ImageTextContainer style={{ gap: '16px', alignItems: 'flex-start' }}>
              {!singleUserData.imgUrl ? (
                <ImagePlaceholder style={{ height: '140px', width: '140px' }} />
              ) : (
                <img
                  src={singleUserData.imgUrl}
                  style={{ height: '140px', width: '140px', borderRadius: '50%' }}
                  alt="img"
                />
              )}
              <UserData>
                <UserInfoGroup>
                  <h2>{`${singleUserData.firstName} ${singleUserData.lastName}`}</h2>
                  <p>@{singleUserData.username}</p>
                </UserInfoGroup>
                <UserInfoGroup>
                  <p>{singleUserData.bio}</p>
                  <p>{singleUserData.website}</p>
                </UserInfoGroup>

                <MetadataContainer>
                  <p
                    onClick={followingUsers.length > 0 ? openFollowingModal : undefined}
                    style={{ cursor: 'pointer' }}>
                    {followingUsers.length} Following
                  </p>
                  <p
                    onClick={followerUsers.length > 0 ? openFollowersModal : undefined}
                    style={{ cursor: 'pointer' }}>
                    {followerUsers.length} Followers
                  </p>
                </MetadataContainer>
              </UserData>
            </ImageTextContainer>
          </ProfileDataContainer>

          {singleUserData._id === currentUser._id ? (
            <Button variant="outlined" onClick={() => openEditModal()}>
              Edit
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={() =>
                isUserAlreadyFollowed
                  ? unFollowAUser(singleUserData._id)
                  : followUser(singleUserData._id)
              }>
              {isUserAlreadyFollowed ? `UnFollow` : `Follow`}
            </Button>
          )}
        </ProfileContainer>
        <Feed feedToShow={selectedUserPosts} />
      </UserMainContainer>
      <FollowingModal
        isOpen={isFollowingModalOpen}
        closeModal={() => closeFollowingModal()}
        followingUsers={followingUsers}
        showAction={singleUserData._id === currentUser._id}
      />

      <FollowersModal
        isOpen={isFollowersModalOpen}
        closeModal={() => closeFollowersModal()}
        followerUsers={followerUsers}
      />
      <EditModal
        isOpen={isEditModalOpen}
        closeEditModal={() => closeEditModal()}
        initialUserData={singleUserData}
        setSingleUserData={(userData) => setSingleUserData(userData)}
      />
    </PageWrapper>
  );
}
