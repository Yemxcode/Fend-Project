import React from 'react';
import VoteButton from './VoteButton';
import DeleteButton from './DeleteButton';
import {Link} from '@reach/router';
import { Context } from "../MyContext";
import Time from "./Time";
import '../Layouts/Main.css'

export default function FormatComments ({comments, error, deleteComment}){
 return (
   <Context.Consumer>
     {context => (
       <ul className="comment_Ul">
         {comments.map(comment => (
           <li className="comment_Li" key={comment.comment_id}>
             <p className="comment_Username">
               <Link to={`/users/${comment.author}`}>{comment.author}</Link>
             </p>
             <p>{comment.body}</p>
             <p>
               Posted: <Time time={comment.created_at} />
             </p>{" "}
             <VoteButton
               commentOrArticle="comments"
               votes={comment.votes}
               id={comment.comment_id}
             />
             {context.state.loggedInAs === comment.author && (
               <DeleteButton
                 error={error}
                 deleteFunc={deleteComment}
                 id={comment.comment_id}
               />
             )}
           </li>
         ))}
       </ul>
     )}
   </Context.Consumer>
 );
}