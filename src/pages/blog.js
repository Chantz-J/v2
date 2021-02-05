import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'


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
            title
            slug
            publishedDate (formatString: "MMMM Do, YYYY")
            updatedAt (fromNow: true)
          }
        }
      }
    }
    `)
    return (
        <Layout>
          <Head title="Blog"/>
            <ol>
              {data.allContentfulBlogPost.edges.map(x => {
                return (
                  <li>
                    <Link to={`${x.node.slug}`}>
                      <h2>{x.node.title}</h2>
                      <p>{x.node.publishedDate}</p>
                      <p>Edited {x.node.updatedAt}</p>
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