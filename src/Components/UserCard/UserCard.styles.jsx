import styled from '@emotion/styled';

export const UserCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserIconAndDetails = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
`;

export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NameContainer = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const UserNameContainer = styled.p`
  font-size: 12px;
  color: '#e4e4e4';
`;
