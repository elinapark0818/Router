import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './app.css';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Linked Home</Link>
        <Link to="/profile">Linked Profile</Link>
      </nav>

      <Switch>
        <Route path={['/', '/home']} exact>
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
