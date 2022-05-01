import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import { Home } from './pages/home/Home';
import './app.css';

function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
