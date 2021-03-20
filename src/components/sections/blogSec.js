import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'

const BlogContainer =  styled.section`
    display: flex;
    background: ${props => props.theme.colors.dark};
    padding: 6rem 7rem;
    justify-content: space-evenly;

    
     article {

        padding: 60px;
        width: 80%;

         .img-container {
                
            }
            
            a {
                color: ${props => props.theme.colors.secondary};
                font-family: ${props => props.theme.fonts.head};
                text-decoration: none;
                
            }
        }
    }
    
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
        
        <BlogContainer>
              {data.allContentfulBlogPost.edges.map(x => {
                return (
                
                    <article key={x.node.id}>
                        <div className="img-container">
                            <img src={x.node.image.fixed.src} alt={x.node.image.description} width='100%' />
                        </div>
                        <Link to={`/blog/${x.node.slug}`}>
                            <h2>{x.node.title}</h2>
                            <p>{x.node.publishedDate}</p>
                        </Link>
                    </article>
                
                )
              })}
            
        </BlogContainer>
    )
}