import React from 'react';
import {Link} from "@reach/router";
import TopicCard from './TopicCard';


export default function  Homepage  ()  {
 
 return (
  <div>
    <button><Link to="/sign_up">Sign Up</Link></button>
    <button><Link to="/articles">Browse</Link></button>
    <TopicCard />
  </div>
 )
 
}
 

