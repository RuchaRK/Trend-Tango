import { Route, Routes } from 'react-router-dom';
import './App.css';
import { routeName } from './App.routes';
import { RequiresAuth } from './Components/RequiresAuth';
import { Bookmark } from './pages/Bookmark/Bookmark';
import { Explore } from './pages/Explore/Explore';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Signin } from './pages/Signin/Signin';
import { SinglePost } from './pages/SinglePost/SinglePost';
import { UserProfile } from './pages/UserProfile/UserProfile';

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
