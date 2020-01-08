import React from 'react';
import {Link} from "@reach/router";
import TopicCard from './TopicCard';
import '../Layouts/Main.css'


export default function  Homepage  ()  {
 
 return (
  <div className="homepage">
    <button className="signUpButton"><Link to="/sign_up">Sign Up</Link></button>
     <button className="browseButton"><Link to="/articles">Browse</Link></button>
     {/* <TopicCard /> */}
  </div>
 )
 
}
 

