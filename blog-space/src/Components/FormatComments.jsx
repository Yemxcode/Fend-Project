import React from 'react';
import VoteButton from './VoteButton';
import DeleteButton from './DeleteButton';
import {Link} from '@reach/router';
import '../Layouts/Main.css'

export default function FormatComments ({comments, username, error, deleteComment}){
 return (
   <ul className="comment_Ul">
     {comments.map(comment => (
       <li className="comment_Li"  key={comment.comment_id}>
         <p className="comment_Username">
           <Link to={`/users/${comment.author}`}>{comment.author}</Link>
         </p>
         <p>{comment.body}</p>
         <p>{comment.created_at}</p>{" "}
         <VoteButton
           commentOrArticle="comments"
           votes={comment.votes}
           id={comment.comment_id}
         />
         {username === comment.author && (
           <DeleteButton
             error={error}
             deleteFunc={deleteComment}
             id={comment.comment_id}
           />
         )}
       </li>
     ))}
   </ul>
 );
}