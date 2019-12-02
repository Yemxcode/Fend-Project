import React from 'react';
import {Router}  from '@reach/router';
import './App.css';
import Homepage from './Components/Homepage'
import Layout from './Layouts/Layout'
import NavigationBar from './Layouts/Navigation';
import Jumbotron from './Layouts/Jumbotron'


function App() {
  return (
    <>
      <NavigationBar/>
      <Jumbotron/>
      <Layout>
     <Router>
       <Homepage path="/"/>
     </Router>
     </Layout>
    </>
  );
}

export default App;
