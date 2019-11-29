import React from 'react';
import {Router}  from '@reach/router';
import './App.css';
import Homepage from './Components/Homepage'


function App() {
  return (
    <>
     <Router>
       <Homepage path="/"/>
     </Router>
    </>
  );
}

export default App;
