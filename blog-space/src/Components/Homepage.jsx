import React from 'react';
import {Link} from "@reach/router";
// import TopicCard from './TopicCard';


export default function  Homepage  ({Context})  {
 
 return (
  <div>
    <button><Link to="/login">Login</Link></button>
    <button><Link to="/signup">SignUp</Link></button>
    <button><Link to="/articles">Browse</Link></button>
    {/* <TopicCard /> */}
  </div>
 )
 
}
 

