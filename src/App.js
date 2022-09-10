// import logo from './logo.svg';
import './App.css';
import Login from './page/Dashboard/Login';
import { employeesData } from "././Data/employeesData";
import { useEffect } from 'react';
import React from "react";
import Routers from "./Routes";
import Add from './page/Dashboard/Add';

function App() {

  useEffect(() => {
    if (employeesData) {
      localStorage.setItem('userDetails', JSON.stringify(employeesData));
    }
  }, []);

  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;

