import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../Components/Button';
import { UserMainContainer, UserData } from './UserProfile.style';

export function UserProfile() {
  const { id } = useParams();
  console.log('Id value', id);

  const fetchSingleUser = async () => {
    console.log('inside fetch');
    try {
      console.log('inside try');
      const response = await fetch(`/api/users/${id}`);
      console.log('Response', response);
      const data = await response.json();
      console.log('Single User data', data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchSingleUser();
  }, []);

  return (
    <UserMainContainer>
      <UserData>
        <h1>this is user data</h1>
      </UserData>
      <Button varient="outlined">Follow</Button>
    </UserMainContainer>
  );
}
