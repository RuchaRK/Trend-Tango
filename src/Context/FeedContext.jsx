import * as React from 'react';

export const FeedContext = React.createContext();

export function FeedContextProvider({ children }) {
  const [postsToShow, setPostsToShow] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('api/posts');
      const data = await response.json();

      if (data.posts) {
        setPostsToShow(data.posts);
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FeedContext.Provider value={{ postsToShow, setPostsToShow }}>{children}</FeedContext.Provider>
  );
}
