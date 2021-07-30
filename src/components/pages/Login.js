import React from 'react';
import './App.css';

import Login from '../login/Login';
import MenuBar from '../login/MenuBar';


function LoginPage() {
  return (
   <React.Fragment>

    <MenuBar />
    <Login />
      
    </React.Fragment>
  );
}

export default LoginPage;
