import React from "react"
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"
import ArticleLayout from '../ArticleLayout/ArticleLayout'
import ArticlesGroup from '../ArticlesGroup'
import SectionHeader from '../../SectionHeader'




const ArticleContainer = styled.section`
  background: ${props => props.theme.colors.blue[1]};
  color: ${props => props.theme.colors.secondary};
    a {
        text-decoration: none !important;
    }

    h2 {
        font-family: font-family: ${props => props.theme.fonts.head} !important;
        color: ${props => props.theme.colors.tertiary};
        font-size: 2rem !important;
      }
      
      #category {
        font-family: ${props => props.theme.fonts.head} !important;
        color: ${props => props.theme.colors.secondary};
        font-weight: 500 !important;
      }
      
      #title {
        letter-spacing: 0.4px !important;
        font-size: 22px !important;
        font-size: 1.375rem !important;
        line-height: 1.13636 !important;
      }
      
      #banner {
        margin: 20px !important;
        height: 800px !important;
      }
      
      #editor {
        font-size: 16px !important;
        font-size: 1rem !important;
        line-height: 1.75 !important;
      }
      
      .uk-navbar-container {
        background: #fff !important;
        font-family: Staatliches !important;
      }
      
      img:hover {
        opacity: 1 !important;
        transition: opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) !important;
      }

`

export default function ArticleComponent(){
  const data = useStaticQuery(query)

  return (
    <ArticleLayout seo={data.strapiHomepage.seo}>
        <ArticleContainer>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                  {/* <h2>{data.strapiHomepage.hero.title}</h2> */}
                  <SectionHeader text={'Articles'}/>
                  <ArticlesGroup articles={data.allStrapiArticle.edges} />
                </div>
            </div>
        </ArticleContainer>
    </ArticleLayout>
  )
}

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          localFile {
            publicURL
          }
        }
      }
    }

    allStrapiArticle {
      edges {
        node {
          strapiId
          slug
          title
          category {
            name
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 800, height: 500)
              }
            }
          }
          author {
            name
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 30, height: 30)
                }
              }
            }
          }
        }
      }
    }


  }
`