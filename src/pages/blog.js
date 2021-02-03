import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

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
              fields {
                slug
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
                    <Link to={`${x.node.fields.slug}`}>
                      <h2>{x.node.frontmatter.title}</h2>
                      <p>{x.node.frontmatter.date}</p>
                    </Link>
                    <br></br>
                    <br></br>
                    <br></br>
                  </li>
                )
              })}
            </ol>
        </Layout>
    )
}
export default Blog