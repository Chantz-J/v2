import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const Blog = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `)
    return (
        <Layout>
            <ol>
              {data.allMarkdownRemark.edges.map(x => {
                return (
                  <li>
                    <h2>{x.node.frontmatter.title}</h2>
                    <p>{x.node.frontmatter.date}</p>
                  </li>
                )
              })}
            </ol>
        </Layout>
    )
}
export default Blog