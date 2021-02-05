import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// export const query = graphql`
// query (
//     $slug: String!
//   ) {
//     markdownRemark(
//       fields: {
//         slug: {
//           eq: $slug
//         }
//       }
//     ) {
//       frontmatter{
//         title
//         date
//       }
//       html
//     }
//   }
// `
export const query = graphql`
  query($slug: String!){
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM, Do, YYYY")
      updatedAt (fromNow: true)
      body {
        json
      }
    }
  }
`

const Blog = (props) => {
   
    return (
        <Layout>
           <h1>{props.data.contentfulBlogPost.title}</h1>
           <p>{props.data.contentfulBlogPost.date}</p>
           <p>{props.data.contentfulBlogPost.updatedAt}</p>
           {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
        </Layout>
    )
}
export default Blog