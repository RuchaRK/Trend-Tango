import './App.css';
import { Routes, Route } from 'react-router-dom';
import { routeName } from './App.routes';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { RequiresAuth } from './Components/RequiresAuth';
import { Signin } from './pages/Signin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path={routeName.HOME}
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
        <Route path={routeName.LOGIN} element={<Login />} />
        <Route path={routeName.SIGNIN} element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
