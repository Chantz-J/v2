import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery, } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const StyledMain =  styled.main`
  margin-left: 160px; 
  background: ${props => props.theme.colors.dark};
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
                      <Link key={x.node.id} to={`${x.node.slug}`}>
                        <article className="article-container">
                          <div className="img-container">
                            <img src={x.node.image.fixed.src} alt={x.node.image.description} />
                          </div>
                          <div className="article-info">
                              <h3>{x.node.title}</h3>
                              <p>{x.node.publishedDate}</p>
                              <p>{x.node.updatedAt}</p>
                          </div>
                        </article>
                      </Link>
                    )
                })}
          </StyledMain>
        </Layout>
    )
}
export default Blog