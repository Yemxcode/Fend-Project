import React from 'react';
import {Link} from "@reach/router";


export default function  Homepage  ()  {
 
 return (
  <div>
    <button><Link to="/login">Login</Link></button>
    <button><Link to="/signup">SignUp</Link></button>
    <button><Link to="/articles">Browse</Link></button>

    <p>
     Read me!
    </p>
  </div>
 )
 
}
 

