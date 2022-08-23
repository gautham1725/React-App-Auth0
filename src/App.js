import './App.css';
import Profile from './components/Profile';
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from './components/Navbar';

function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <div>
      <Navbar/>
      {isAuthenticated ? <Profile/> : <p
      >Please Login to continue ...</p>}
    </div>
  );
}

export default App;
