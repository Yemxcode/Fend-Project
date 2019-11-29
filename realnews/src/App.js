import React from 'react';
import {Router}  from '@reach/router';
import './App.css';
import Homepage from './Components/Homepage'
import Layout from './Layouts/Layout'
import NavigationBar from './Layouts/Navigation';

function App() {
  return (
    <>
      <NavigationBar/>
      <Layout>
     <Router>
       <Homepage path="/"/>
     </Router>
     </Layout>
    </>
  );
}

export default App;
