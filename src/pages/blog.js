import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery, } from 'gatsby'
import mediaQueries from '../styles/breakpoints'

import Layout from '../components/layout'
import Head from '../components/head'

const StyledMain =  styled.main`
  margin-left: 160px;
  background: ${props => props.theme.colors.dark};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  ${mediaQueries.phablet`
    margin-left: 0;
   `}

  .article-container {
    box-shadow: 0 0.125rem 0.375rem 0 rgba(0, 0, 0, 0.6);
    max-width: 700px;
    display: flex;
    align-items: center;
    ${mediaQueries.desktop_small`
    flex-direction: column;
    width: 100%;
   `}
    

     .article-info {
       padding-left: 2rem;

          a {
            text-decoration: none;

            h3 {
              color: ${props => props.theme.colors.secondary};
              font-family: ${props => props.theme.fonts.head};
            }
        
            p {
              color: ${props => props.theme.colors.secondary};
              font-family: ${props => props.theme.fonts.body};
            }
        }

     }

  }
`


const Blog = () => {
    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        edges {
          node {
            id
            title
            slug
            publishedDate (formatString: "MMMM Do, YYYY")
            updatedAt (fromNow: true)
            image  {
              description
              fixed (height: 200) {
                src
              }
            }
          }
        }
      }
    }
    `)
    return (
        <Layout>
          <Head title="Blog"/>
          <StyledMain>
                {data.allContentfulBlogPost.edges.map(x => {
                  return (
                        <article className="article-container" key={x.node.id}>
                            <div className="img-container">
                                <img src={x.node.image.fixed.src} alt={x.node.image.description} width="100%"/>
                            </div>
                            <div className="article-info">
                                <Link to={`${x.node.slug}`}>
                                  <h3>{x.node.title}</h3>
                                  <p>{x.node.publishedDate}</p>
                                  {/* <p>{x.node.updatedAt}</p> */}
                                </Link>
                            </div>
                        </article>
                    )
                })}
          </StyledMain>
        </Layout>
    )
}
export default Blog