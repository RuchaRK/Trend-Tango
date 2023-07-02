import * as React from 'react';

export const UserContext = React.createContext();

export function UserContextProvider({ children }) {
  const [users, setUsers] = React.useState([]);

  //   const [isError, setIsError] = React.useState(false);

  const fetchAllUsers = async () => {
    try {
      const response = await fetch('api/users');
      const data = await response.json();

      if (data.users) {
        setUsers(data.users);
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchAllUsers();
  }, []);

  const userLookUp = users.reduce((acc, cum) => ({ ...acc, [cum.username]: cum }), {});

  //   allUserData.map((data) => setUserNameData({ ...userNameData, username: data }));

  const value = React.useMemo(() => {
    return { userLookUp, users, setUsers };
  }, [userLookUp, users, setUsers]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
