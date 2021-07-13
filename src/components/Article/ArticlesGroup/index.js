import React from "react"
import ArticleCard from "../ArticleCard"


export default function ArticlesGroup({ articles }){
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div style={{paddingTop: '5rem'}}>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {leftArticles.map((article, i) => {
            return (
              <ArticleCard
                article={article}
                key={`article__left__${article.node.slug}`}
              />
            )
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightArticles.map((article, i) => {
              return (
                <ArticleCard
                  article={article}
                  key={`article__right__${article.node.slug}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

