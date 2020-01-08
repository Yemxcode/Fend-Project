import React from 'react';
import {Link} from "@reach/router";
import TopicCard from './TopicCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp, faNewspaper, faSignOutAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import '../Layouts/Main.css'


export default function  Homepage  ()  {
 
 return (
  <div className="homepage">
     <button className="signUpButton"><Link to="/sign_up">Sign-Up <FontAwesomeIcon icon={faUsers} className="hvr-icon" /></Link></button>
     <button className="browseButton"><Link to="/articles">Browse <FontAwesomeIcon icon={faNewspaper} className="hvr-icon" /></Link></button>
     {/* <TopicCard /> */}
  </div>
 )
 
}
 

