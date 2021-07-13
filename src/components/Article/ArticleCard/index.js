import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ArticleContainer = styled.div`
  background: ${props => props.theme.colors.blue[0]}; 
  box-shadow: 0 0.125rem 0.375rem 0 rgba(0, 0, 0, 0.12);
  padding: .8rem;
`


export default function ArticleCard({ article }){
  return (
    <Link to={`${article.node.slug}`} className="uk-link-reset">
      <ArticleContainer>
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <GatsbyImage
              image={article.node.image.localFile.childImageSharp.gatsbyImageData}
              alt={`Hero image`}
            />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.node.category.name}
            </p>
            <p id="title" className="uk-text-large">
              {article.node.title}
            </p>
            <div>
              <hr className="uk-divider-small" />
              <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                <div>
                  {article.node.author.picture && (
                    <GatsbyImage
                      image={article.node.author.picture.localFile.childImageSharp.gatsbyImageData}
                      alt={`Picture of ${article.node.author.name}`}
                      style={{ borderRadius: "50%" }}
                    />
                  )}
                </div>
                <div className="uk-width-expand">
                  <p className="uk-margin-remove-bottom">
                    {article.node.author.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ArticleContainer>
    </Link>
  )
}
