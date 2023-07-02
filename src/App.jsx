import './App.css';
import { Routes, Route } from 'react-router-dom';
import { routeName } from './App.routes';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { RequiresAuth } from './Components/RequiresAuth';
import { Signin } from './pages/Signin/Signin';
import { PageWrapper } from './Components/PageWrapper/PageWrapper';
import { Explore } from './pages/Explore/Explore';
import { Bookmark } from './pages/Bookmark/Bookmark';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { SinglePost } from './pages/SinglePost/SinglePost';

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
              <SinglePost />
            </RequiresAuth>
          }
        />
        <Route
          path="/userProfile/:id"
          element={
            <RequiresAuth>
              <UserProfile />
            </RequiresAuth>
          }
        />
        <Route
          path={routeName.HOME}
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
        <Route
          path={routeName.EXPLORE}
          element={
            <RequiresAuth>
              <Explore />
            </RequiresAuth>
          }
        />
        <Route
          path={routeName.BOOKMARK}
          element={
            <RequiresAuth>
              <Bookmark />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
