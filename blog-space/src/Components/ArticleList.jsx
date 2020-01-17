import React from "react";
import {Link} from "@reach/router"
import Time from './Time'
import football from '../Assets/football.jpeg'
import americanfootball from '../Assets/americanfootball.jpeg'
import art from '../Assets/art.jpeg'
import baseball from '../Assets/baseball.jpeg'
import blog from '../Assets/blog.jpeg'
import boxing from '../Assets/boxing.jpeg'
import climbing from '../Assets/climbing.jpeg'
import coding from '../Assets/coding.jpeg'
import cooking from '../Assets/cooking.jpeg'
import cycling from '../Assets/cycling.jpeg'
import dancing from '../Assets/dancing.jpeg'
import festival from '../Assets/festival.jpeg'
import fighting from '../Assets/fighting.jpeg'
import fitness from '../Assets/fitness.jpeg'
import music from '../Assets/music.jpeg'
import swimming from '../Assets/swimming.jpeg'
import tennis from '../Assets/tennis.jpeg'




export default function ArticleList({ article }) {
  const articleImages  = {football, americanfootball, art, baseball, blog, boxing, climbing, coding, cooking, cycling, dancing, festival, fighting, fitness, music, swimming, tennis};
  const imageKeys = Object.keys(articleImages)
  let displayImage = imageKeys.filter(image => article.topic.toUpperCase() === image.toUpperCase())
  if (!displayImage.length) {
    displayImage = ["blog"]
  }
  if (article.topic === "american football"){
    displayImage = ["americanfootball"]
  }
 if (!article) return <h3> The searched author does not have an article with the searched topic :/</h3>
 else
  return (
    <> 
    
      <ul className="Ul">
       
        
          <Link
            to={`/articles/id/${article.article_id}`}
          >
          <li className="articleLi"> 
              
               <img className="articleImages" src={articleImages[displayImage[0]]} alt="article topic visual representation" />
            <div className="articleInfo">
              <section className="article_Title">{article.title}</section>
              <section className="timeLikes">
               
                <p>
                  Created: <Time time={article.created_at} />
                </p>{" "}
                <p>Likes: {article.votes}</p>
              </section>
              <section className="articleListComments">
                {" "}
                Comments: {article.comment_count}
              </section>
              
              </div>
            </li>
          </Link>
        
      </ul>
    </>
  );
}
