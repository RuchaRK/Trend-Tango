import * as React from 'react';
import { LoginContext } from '../Context/LoginContext';
import { Feed } from './Feed';

export function Bookmark() {
  const { userBookmarks } = React.useContext(LoginContext);
  return (
    <div>
      {userBookmarks.length > 0 ? <Feed feedToShow={userBookmarks} /> : <h2> No Bookmarks yet</h2>}
    </div>
  );
}
