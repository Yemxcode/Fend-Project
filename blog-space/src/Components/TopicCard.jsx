import React from "react";
import {Link} from '@reach/router';
import '../Layouts/TopicCard.css'


export default function TopicCard () {
 return (
   <div className="container">
     <div className="card">
       <div className="face face1">
         <div className="content">
           <img
             src="https://www.pinterest.co.uk/pin/610800768197726095/"
             alt="naruto"
           ></img>
           <h3>Coding</h3>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p>i can type what ever here</p>
           <span>
             <Link to="/articles/coding">Read More</Link>
           </span>
         </div>
       </div>
     </div>
     <div className="card">
       <div className="face face1">
         <div className="content">
           <img
             src="https://www.pinterest.co.uk/pin/610800768197726095/"
             alt="naruto"
           ></img>
           <h3>Football</h3>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p>i can type what ever here</p>
           <span>
             <Link to="/articles/football">Read More</Link>
           </span>
         </div>
       </div>
     </div>
     <div className="card">
       <div className="face face1">
         <div className="content">
           <img
             src="https://www.pinterest.co.uk/pin/610800768197726095/"
             alt="naruto"
           ></img>
           <h3>Cooking</h3>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p>i can type what ever here</p>
           <span>
             <Link to="/articles/cooking">Read More</Link>
           </span>
         </div>
       </div>
     </div>
   </div>
 );
}

