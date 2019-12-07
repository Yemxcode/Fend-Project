import React from 'react';
import {Router}  from '@reach/router';
import './App.css';
import Homepage from './Components/Homepage'
import Layout from './Layouts/Layout'
import NavigationBar from './Layouts/Navigation';
import Jumbotron from './Layouts/Jumbotron'
import Articles from './Components/Articles'
import Users from './Components/Users'

function App() {
  return (
    <>
      <NavigationBar/>
      <Jumbotron/>
      <Layout>
     <Router>
       <Homepage path="/"/>
       <Articles path="/articles" />
       <Users path="/users" />
      
     </Router>
     </Layout>
    </>
  );
}

export default App;
