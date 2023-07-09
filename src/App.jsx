import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { routeName } from './App.routes';
import { RequiresAuth } from './Components/RequiresAuth';
import { Bookmark } from './pages/Bookmark/Bookmark';
import { Explore } from './pages/Explore/Explore';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Signin } from './pages/Signin/Signin';
import { SinglePost } from './pages/SinglePost/SinglePost';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { NotFound } from './pages/NotFound/NotFound';

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
        <Route path={'*'} element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
