import React from "react";
import {Link} from "@reach/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faCode, faFutbol} from "@fortawesome/free-solid-svg-icons";
import Time from './Time'


export default function ArticleList({ articles, totalCount, maxPage }) {
 if (!articles.length) return <h3>chosen author does not have an article with the chosen topic :/</h3>
 else
  return (
    <>
    <ul className="Ul">
      <h2>Articles</h2>
      <h3>Total Article count: {totalCount}</h3>
      {articles.map(article => (
        
        <li className="Li" key={article.article_id}>
          <section className="article_Title"><Link to={`/articles/id/${article.article_id}`}>{article.title}</Link></section>
          <section className="timeLikes"><p>Created: <Time time={article.created_at} /></p> <p>Likes: {article.votes}</p></section>
          <section> Comments: {article.comment_count}</section>
          <div className="icon">
            {article.topic === "cooking" && (
              <FontAwesomeIcon icon={faHamburger} />
            )}
            {article.topic === "football" && (
              <FontAwesomeIcon icon={faFutbol} />
            )}
            {article.topic === "coding" && <FontAwesomeIcon icon={faCode} />}{" "}
          </div>
        </li>
      ))}
    </ul>
    
    </>
  );
}
