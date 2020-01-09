import React from 'react';
import {Link} from "@reach/router";
import TopicCard from './TopicCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faUsers } from "@fortawesome/free-solid-svg-icons";
import '../Layouts/Main.css'


export default function  Homepage  ()  {
 
 return (
  <div className="homepage">
     <Link to="/sign_up"><button className="signUpButton">Sign-Up <FontAwesomeIcon icon={faUsers} className="hvr-icon" /></button></Link>
     <Link to="/articles"><button className="browseButton">Browse <FontAwesomeIcon icon={faNewspaper} className="hvr-icon" /></button></Link>
     {/* <TopicCard /> */}
  </div>
 )
 
}
 

