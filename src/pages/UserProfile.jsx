/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Modal } from '../Components/Modal';
import { Button } from '../Components/Button';
import { SignContainer, FormData } from './Signin.style';
import { InputContainer, Input } from '../Components/Input';
import { getLoginToken } from '../LoginLocalStorage';
import {
  UserMainContainer,
  UserData,
  ProfileContainer,
  ProfileDataContainer,
  MetadataContainer,
  UserInfoGroup
} from './UserProfile.style';
import { usePostActions } from '../Hook/usePostActions';
import { LoginContext } from '../Context/LoginContext';
import { Feed } from './Feed';
import {
  ImageContainer,
  ImageTextContainer,
  SingleUserData,
  UserListContainer
} from './Home.style';
import { PageWrapper } from '../Components/PageWrapper';

export function UserProfile() {
  const { id } = useParams();
  const [singleUserData, setSingleUserData] = React.useState();
  const { followUser, unFollowAUser } = usePostActions();
  const { currentUser, following, followers } = React.useContext(LoginContext);
  const [selectedUserPosts, setSelecteduserPosts] = React.useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openEditModal() {
    setEditModal(true);
  }

  function closeEditModal() {
    setEditModal(false);
  }
  const fetchSingleUser = async () => {
    try {
      const response = await fetch(`/api/users/${id}`);
      const data = await response.json();

      if (data.user) {
        setSingleUserData(data.user);
        const postResponse = await fetch(`/api/posts/user/${data.user.username}`);
        const postData = await postResponse.json();
        setSelecteduserPosts(postData.posts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editUserDetails = async () => {
    try {
      const editResponse = await fetch('/api/users/edit', {
        method: 'POST',
        body: JSON.stringify({
          userData: { ...singleUserData }
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: getLoginToken()
        }
      });

      const editedData = await editResponse.json();

      if (editedData.user) {
        setSingleUserData({ ...editedData.user });
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchSingleUser();
  }, [id]);

  if (!singleUserData) {
    return null;
  }

  const isUserAlreadyFollowed = following.find((node) => node._id === singleUserData._id);

  const followingUsers =
    singleUserData._id === currentUser._id ? following : singleUserData.following;
  const followerUsers =
    singleUserData._id === currentUser._id ? followers : singleUserData.followers;

  console.log(singleUserData);

  return (
    <PageWrapper title={'Profile'}>
      <UserMainContainer>
        <ProfileContainer>
          <ProfileDataContainer>
            <ImageTextContainer style={{ gap: '16px', alignItems: 'flex-start' }}>
              <ImageContainer style={{ height: '140px', width: '140px' }} />
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
                  <p onClick={openModal} style={{ cursor: 'pointer' }}>
                    {followingUsers.length} Following
                  </p>
                  <p onClick={openModal} style={{ cursor: 'pointer' }}>
                    {followerUsers.length} Followers
                  </p>
                </MetadataContainer>

                <Modal
                  isOpen={modalIsOpen}
                  height="400px"
                  width="450px"
                  title="following"
                  closeModal={() => closeModal()}>
                  <UserListContainer>
                    {followingUsers.map((info) => (
                      <SingleUserData style={{ border: 'none', padding: 'unset' }}>
                        <ImageTextContainer>
                          <ImageContainer />
                          <UserData>
                            <Link to={`/userProfile/${info._id}`}>
                              <p>
                                {info.firstName}
                                {info.lastName}
                              </p>
                            </Link>

                            <p>@{info.username}</p>
                          </UserData>
                        </ImageTextContainer>

                        <Button varient="outlined" onClick={() => unFollowAUser(info._id)}>
                          UnFollow
                        </Button>
                      </SingleUserData>
                    ))}
                  </UserListContainer>
                </Modal>
              </UserData>
            </ImageTextContainer>
          </ProfileDataContainer>

          {singleUserData._id === currentUser._id ? (
            <Button varient="outlined" onClick={() => openEditModal()}>
              Edit
            </Button>
          ) : (
            <Button
              varient="outlined"
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

        <Modal
          isOpen={editModal}
          height="auto"
          width="420px"
          title="Edit Profile"
          closeModal={() => closeEditModal()}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'flex-end',
              padding: '24px 0px'
            }}>
            <InputContainer>
              FirstName
              <Input
                type="text"
                placeholder="Enter FirstName"
                name="firstname"
                value={singleUserData.firstName}
                onChange={(event) =>
                  setSingleUserData({
                    ...singleUserData,
                    [event.target.name]: event.target.value
                  })
                }
              />
            </InputContainer>
            <InputContainer>
              LastName
              <Input
                type="text"
                placeholder="Enter LastName"
                name="lastname"
                value={singleUserData.lastName}
                onChange={(event) =>
                  setSingleUserData({
                    ...singleUserData,
                    [event.target.name]: event.target.value
                  })
                }
              />
            </InputContainer>
            <InputContainer>
              Bio
              <Input
                type="text"
                placeholder="Write Something about yourself....."
                name="bio"
                value={singleUserData.bio}
                onChange={(event) =>
                  setSingleUserData({
                    ...singleUserData,
                    [event.target.name]: event.target.value
                  })
                }
              />
            </InputContainer>
            <InputContainer>
              Website
              <Input
                type="website"
                placeholder="Enter Website link...."
                name="website"
                value={singleUserData.website}
                onChange={(event) =>
                  setSingleUserData({
                    ...singleUserData,
                    [event.target.name]: event.target.value
                  })
                }
              />
            </InputContainer>
            <Button
              onClick={() => {
                editUserDetails();
                closeEditModal();
              }}>
              Save
            </Button>
          </div>
        </Modal>
      </UserMainContainer>
    </PageWrapper>
  );
}
