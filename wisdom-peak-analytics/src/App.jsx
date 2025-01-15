import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import UserDetail from './components/UserDetail';
import { UserContext } from './components/UserContext';

function App() {


  return (
    // Wrap the app in a div with the dynamic theme class


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
   
  );
}

export default App;
