import React from 'react';
import './App.css';
import UserComponent from './components/UserComponent'
import SignUpComponent from './components/SignUpComponent'

function App() {
  return (
    <div className="container">
    <UserComponent/>
    <SignUpComponent></SignUpComponent>
    </div>
  );
}

export default App;
