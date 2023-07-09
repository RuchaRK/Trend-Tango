import styled from '@emotion/styled';

const H1 = styled.h1`
  font-size: 44px;
  margin-bottom: 20px;
  color: red;
  margin-top: 200px;
`;

const Message = styled.h4`
  font-size: 20px;
  margin-bottom: 32px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function NotFound() {
  return (
    <Container>
      <H1>404</H1>
      <Message>Opps! Page Not Found</Message>
    </Container>
  );
}
