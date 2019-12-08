import React from 'react';
import {Link} from '@reach/router';
import VoteButton from './VoteButton';


export default function FormatArticle ({article}) {
 const {
   article_id,
   title,
   body,
   votes,
   topic,
   author,
   created_at,
   comment_count
 } = article;
 return (
   <>
     <article>
       <h3>
         <Link to={`/users/${author}`}>Author: {author}</Link>
       </h3>
       <section>Article Id: {article_id}</section>
       <section>Topic: {topic}</section>
       <section>Created: {created_at}</section>
       <section>Title: {title}</section>
       <section>Body: {body}</section>
       <section>Comments: {comment_count}</section>
     </article>
     <VoteButton
       commentOrArticle="articles"
       id={article_id}
       votes={votes}
     />
   </>
 );
}