import React from "react";
import {Link} from "@reach/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faCode, faFutbol} from "@fortawesome/free-solid-svg-icons";

export default function ArticleList({ articles }) {
 if (!articles.length) return <h3>No results found :/</h3>
 else
  return (
    <ul>
      {articles.map(article => (
        <li key={article.article_id}>
          <Link to={`/articles/id/${article.article_id}`}>{article.title}</Link>
          |
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
