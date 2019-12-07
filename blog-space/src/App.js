import React from 'react';
import {Router}  from '@reach/router';
import './App.css';
import Homepage from './Components/Homepage';
import Layout from './Layouts/Layout';
import NavigationBar from './Layouts/Navigation';
import Jumbotron from './Layouts/Jumbotron';
import Articles from './Components/Articles';
import Users from './Components/Users';
import SingleUser from './Components/SingleUser'
function App() {
  return (
    <>
      <NavigationBar/>
      <Jumbotron/>
      <Layout>
     <Router>
       <Homepage path="/"/>
       <Articles path="/articles" />
       <Users path="/users"/>
       <SingleUser path="/users/:username"/>
     </Router>
     </Layout>
    </>
  );
}

export default App;
