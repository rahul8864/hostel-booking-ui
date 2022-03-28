import './App.css';
import Login from './ui/Login';
import NavBar from './ui/NavBar';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function App() {
  return (
    <>
    <NavBar>
    </NavBar>
      <Login/>
    </>
  );
}

export default App;
