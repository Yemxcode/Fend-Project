import React from "react";
import {Link} from "@reach/router"
export default function ArticleList({ articles }) {
  return (
    <ul>
      {articles.map(article => (
        <li key={article.article_id}>
          <Link to={`/article_search/${article.article_id}`}>
            {article.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
