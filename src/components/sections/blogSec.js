import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'

const BlogContainer =  styled.section`
    background: ${props => props.theme.colors.dark};
    padding: 6rem 7rem;
`

export default function Blogs (){
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
          }
        }
      }
    }
    `)
    return (
        
        <BlogContainer>
            <ol>
              {data.allContentfulBlogPost.edges.map(x => {
                return (
                  <li key={x.node.id}>
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
        </BlogContainer>
    )
}