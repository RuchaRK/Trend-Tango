import './App.css';
import { Routes, Route } from 'react-router-dom';
import { routeName } from './App.routes';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { RequiresAuth } from './Components/RequiresAuth';
import { Signin } from './pages/Signin';
import { PageWrapper } from './Components/PageWrapper';
import { Explore } from './pages/Explore';
import { Bookmark } from './pages/Bookmark';
import { UserProfile } from './pages/UserProfile';
import { SinglePost } from './pages/SinglePost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routeName.LOGIN} element={<Login />} />
        <Route path={routeName.SIGNIN} element={<Signin />} />
        <Route
          path="/posts/:postId"
          element={
            <RequiresAuth>
              <PageWrapper>
                <SinglePost />
              </PageWrapper>
            </RequiresAuth>
          }
        />
        <Route
          path="/userProfile/:id"
          element={
            <RequiresAuth>
              <PageWrapper>
                <UserProfile />
              </PageWrapper>
            </RequiresAuth>
          }
        />
        <Route
          path={routeName.HOME}
          element={
            <RequiresAuth>
              <PageWrapper>
                <Home />
              </PageWrapper>
            </RequiresAuth>
          }
        />
        <Route
          path={routeName.EXPLORE}
          element={
            <RequiresAuth>
              <PageWrapper>
                <Explore />
              </PageWrapper>
            </RequiresAuth>
          }
        />
        <Route
          path={routeName.BOOKMARK}
          element={
            <RequiresAuth>
              <PageWrapper>
                <Bookmark />
              </PageWrapper>
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
