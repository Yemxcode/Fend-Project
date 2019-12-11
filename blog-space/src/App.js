import React from 'react';
import {Router}  from '@reach/router';
import './App.css';
import Homepage from './Components/Homepage';
import Layout from './Layouts/Layout';
import NavigationBar from './Layouts/Navigation';
import Jumbotron from './Layouts/Jumbotron';
import Articles from './Components/Articles';
import Users from './Components/Users';
import SingleUser from './Components/SingleUser';
import SingleArticle from './Components/SingleArticle';
import MyContext from './MyContext';

import LogInPage from './Components/LogInPage'

function App() {
  return (
    <>
    <MyContext>
      <NavigationBar/>
      <Jumbotron/>
      <Layout>
     <Router>
       <Homepage path="/"/>
       <Articles path="/articles" />
       <Articles path="articles/:topic"/>
       <Users path="/users"/>
       <SingleUser path="/users/:username"/>
       <SingleArticle path="/articles/id/:id"/>
        <LogInPage path="/login"/>
     </Router>
     </Layout>
     </MyContext>
    </>
  );
}

export default App;
