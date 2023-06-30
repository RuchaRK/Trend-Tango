import styled from '@emotion/styled';
import { ColorPalette } from '../Color';

export const HomeContainer = styled.div`
  display: flex;
  padding: 0px 36px;
  height: calc(100vh - 80px);
  overflow-y: auto;
`;

export const Title = styled.h3`
  margin: 0px 16px;
  text-align: left;
  height: 32px;
  display: flex;
  align-item: center;
  color: ${ColorPalette.main};
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  justify-content: space-between;
  flex: 0.2;
  cursor: pointer;
  padding: 36px;
  position: sticky;
  top: 0;
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

export const CenterContainer = styled.div`
  display: flex;
  flex: 0.7;
  padding: 36px 0px;
  border-left: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
  flex-direction: column;
  height: 100%;
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 0.2;
  padding: 36px 0px 36px 36px;
  flex-direction: column;
  top: 0;
  position: sticky;
  align-items: flex-start;
`;

export const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
  overflow-y: auto;
  padding-right: 6px;
`;

export const SingleUserData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e4e4e4;
  padding: 8px;
  border-radius: 4px;
  width: 100%;
`;

export const LoggedUser = styled.div``;

export const CreatePostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  background: #f1f1f1;
  margin: 24px 16px;
  padding: 16px;
  border-radius: 4px;
`;

export const PostInput = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  padding: 10px 10px;
  height: 120px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  outline: 1px solid #e4e4e4;
`;

export const ImageContainer = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 1px solid black;
  background: grey;
`;

export const ImageTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
