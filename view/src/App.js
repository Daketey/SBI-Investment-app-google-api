/* eslint-disable no-unused-expressions */
import React, { Component, useEffect, useState } from "react";
import Header from './components/Header';
import Drawer from './components/Drawer';
import Dashboard from './pages/Dashboard';

import "./App.css";

function App(){
  return(
    <div>
      <div style={{overflow: 'hidden'}}>
        <Header />
      </div>
      <Dashboard />
    </div>
  )
      
}

export default App;
