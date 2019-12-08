import React from "react";
import {Link} from "@reach/router"
export default function ArticleList({ articles }) {
 if (!articles.length) return <h3>No results found :/</h3>
 else
  return (
    <ul>
      {articles.map(article => (
        <li key={article.article_id}>
          <Link to={`/articles/${article.article_id}`}>
            {article.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
