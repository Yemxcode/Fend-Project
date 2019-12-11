import React from "react";
import {Link} from "@reach/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faCode, faFutbol} from "@fortawesome/free-solid-svg-icons";

export default function ArticleList({ articles }) {
 if (!articles.length) return <h3>No results found :/</h3>
 else
  return (
    <ul className="Ul">
      <h2>Articles</h2>
      {articles.map(article => (
        <li className="Li" key={article.article_id}>
          <Link to={`/articles/id/${article.article_id}`}>{article.title}</Link>
         <p>Created: {article.created_at}</p>  <p>Likes: {article.votes}</p>
          {article.topic === "cooking" && (
            <FontAwesomeIcon icon={faHamburger} />
          )}
          {article.topic === "football" && <FontAwesomeIcon icon={faFutbol} />}
          {article.topic === "coding" && <FontAwesomeIcon icon={faCode} />}
        </li>
      ))}
    </ul>
  );
}
