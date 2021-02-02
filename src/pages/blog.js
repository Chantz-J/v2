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
    console.log(data)
    return (
        <Layout>
            <ul>
                
            </ul>
        </Layout>
    )
}
export default Blog