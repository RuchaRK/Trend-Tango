import styled from '@emotion/styled';
import { ColorPalette } from '../../Color';

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
  align-items: flex-start;
  gap: 10px;
  justify-content: space-between;
  flex: 0.15;
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
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex: 0.65;
  padding: 36px 0px;
  border-left: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
  flex-direction: column;
  min-height: 100%;
  height: max-content;
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
  overflow-y: hidden;
  padding-right: 6px;
  width: 100%;
  &:hover {
    overflow-y: auto;
  }
`;

export const SingleUserData = styled.div`
  border: 1px solid #e4e4e4;
  padding: 8px;
  border-radius: 4px;
  width: 100%;
`;

export const LoggedUser = styled.div``;

export const ImagePlaceholder = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: #e4e4e4;
`;

export const ImageTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
`;
