import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import { Home } from './pages/home/Home';
import './app.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { UserList } from './pages/userList/UserList';

function App() {
  return (
    <Router>
      <Switch>
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
