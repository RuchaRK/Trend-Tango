import { useNavigate } from 'react-router-dom';
import {
  NameContainer,
  UserCardContainer,
  UserDetailsContainer,
  UserIconAndDetails,
  UserNameContainer
} from './UserCard.styles';
import { ImagePlaceholder } from '../PageWrapper/PageWrappers.style';

export function UserCard({ firstName, lastName, userName, id, action }) {
  const navigate = useNavigate();
  return (
    <UserCardContainer>
      <UserIconAndDetails>
        <ImagePlaceholder />
        <UserDetailsContainer>
          <NameContainer
            onClick={() =>
              navigate(`/userProfile/${id}`)
            }>{`${firstName} ${lastName}`}</NameContainer>
          <UserNameContainer>@{userName}</UserNameContainer>
        </UserDetailsContainer>
      </UserIconAndDetails>
      {action}
    </UserCardContainer>
  );
}
