import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  padding: 36px 36px;
  height: calc(100vh -144px);
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 15px;
  align-items: flex-end;
  gap: 10px;
  justify-content: space-between;
  flex: 0.2;

  cursor: pointer;
  padding: 20px;
`;
export const OptionItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 28px;
`;
export const Option = styled.div`
  display: flex;
  color: #686868;
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const FeedContainer = styled.div`
  display: flex;
  flex: 0.7;
  border: 1px solid orange;
  padding: 15px 15px;
  justify-content: center;
  flex-direction: column;
`;

export const UserContainer = styled.div`
  display: flex;
  flex: 0.2;
  border: 1px solid indigo;
  padding: 15px 15px;
  flex-direction: column;
`;

export const SingleUserData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

export const LoggedUser = styled.div``;

export const CreatePostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostInput = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 1px solid black;
  background: grey;
`;
