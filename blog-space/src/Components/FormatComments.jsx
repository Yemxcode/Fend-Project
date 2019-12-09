import React from 'react';
import VoteButton from './VoteButton';
import DeleteComment from './DeleteComment';
import {Link} from '@reach/router'

export default function FormatComments ({comments, username, error, deleteComment}){
 return (
   <ul>
     {comments.map(comment => (
       <li key={comment.comment_id}>
         <p>
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
                <DeleteComment
                  error={error}
                  deleteComment={deleteComment}
                  comment_id={comment.comment_id}
                />
              )}
       </li>
     ))}
   </ul>
 );
}