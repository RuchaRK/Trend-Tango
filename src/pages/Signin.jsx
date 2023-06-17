import * as React from 'react';
import { Link } from 'react-router-dom';
import { routeName } from '../App.routes';
import { LoginContext } from '../Context/LoginContext';
import { Input, InputContainer, Title } from '../Components/Input';
import { SignContainer, FormData } from './Signin.style';
import { Button } from '../Components/Button';

export function Signin() {
  const [userData, setUserData] = React.useState({});
  const [isError, setIsError] = React.useState(false);
  const { allowLogin } = React.useContext(LoginContext);

  //   const login = (token) => {
  //     console.log('inside login function');
  //     allowLogin(token);
  //     navigate(routeName.HOME);
  //   };

  const addNewUser = async () => {
    try {
      const response = await fetch('api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
          firstname: userData.firstname,
          lastname: userData.lastname,
          username: userData.username,
          password: userData.password
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();

      if (data.errors || (data.error && data.error.length > 0)) {
        setIsError(true);
      }

      if (data.encodedToken) {
        allowLogin(data.encodedToken);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Title>Trend-Tango</Title>

      <SignContainer>
        <FormData>
          <h3>Create a new Account.</h3>
          <InputContainer>
            FirstName
            <Input
              type="text"
              placeholder="Enter FirstName"
              name="firstname"
              onChange={(event) =>
                setUserData({ ...userData, [event.target.name]: event.target.value })
              }
            />
          </InputContainer>
          <InputContainer>
            LastName
            <Input
              type="text"
              placeholder="Enter LastName"
              name="lastname"
              onChange={(event) =>
                setUserData({ ...userData, [event.target.name]: event.target.value })
              }
            />
          </InputContainer>
          <InputContainer>
            UserName
            <Input
              type="text"
              placeholder="Enter UserName"
              name="username"
              onChange={(event) =>
                setUserData({ ...userData, [event.target.name]: event.target.value })
              }
            />
          </InputContainer>
          <InputContainer>
            Password
            <Input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={(event) =>
                setUserData({ ...userData, [event.target.name]: event.target.value })
              }
            />
          </InputContainer>
          <InputContainer>
            Confirm Password
            <Input
              type="password"
              placeholder="Enter Password"
              name="confirmPassword"
              onChange={(event) =>
                setUserData({ ...userData, [event.target.name]: event.target.value })
              }
            />
          </InputContainer>

          {userData.password !== userData.confirmPassword && <h3> Passwords does not match.</h3>}

          <Button type="button" onClick={() => addNewUser()}>
            Create New Account
          </Button>
          <Link to={routeName.LOGIN}>Already have an account? Login</Link>
        </FormData>
      </SignContainer>
    </div>
  );
}
