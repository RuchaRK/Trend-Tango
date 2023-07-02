import * as React from 'react';
import { LoginContext } from '../../Context/LoginContext';
import { Feed } from '../../Components/Feed/Feed';
import { PageWrapper } from '../../Components/PageWrapper/PageWrapper';

export function Bookmark() {
  const { userBookmarks } = React.useContext(LoginContext);
  return (
    <PageWrapper title="Bookmarks">
      <div style={{ paddingTop: '24px' }}>
        {userBookmarks.length > 0 ? (
          <Feed feedToShow={userBookmarks} />
        ) : (
          <h2> No Bookmarks yet</h2>
        )}
      </div>
    </PageWrapper>
  );
}
