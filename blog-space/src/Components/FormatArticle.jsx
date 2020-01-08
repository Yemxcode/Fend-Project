import React from 'react';
import {Link} from '@reach/router';
import VoteButton from './VoteButton';
import DeleteButton from './DeleteButton'
import { Context } from "../MyContext";
import Time from "./Time";
import '../Layouts/Main.css'



export default function FormatArticle ({article, error, deleteArticle}) {
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
     <Context.Consumer>
       {context => (
         <article className="infobox">
           <h3>
             <Link to={`/users/${author}`}>Author: {author}</Link>
           </h3>
           <section>Article Id: {article_id}</section>
           <section>Topic: {topic}</section>
           <section>
             Created: <Time time={created_at} />
           </section>
           <section>Title: {title}</section>
           <section>Body: {body}</section>
           <section>Comments: {comment_count}</section>
           <VoteButton
             commentOrArticle="articles"
             id={article_id}
             votes={votes}
           />
           {context.state.loggedInAs === author && (
             <DeleteButton
               error={error}
               id={article_id}
               deleteFunc={deleteArticle}
             />
           )}
         </article>
       )}
     </Context.Consumer>
   </>
 );
}