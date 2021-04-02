import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import mediaQueries from '../../styles/breakpoints'

const BlogContainer =  styled.section`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.colors.dark};
    padding: 6rem 7rem;
    justify-content: space-between;
    ${mediaQueries.desktop_medium`
      flex-direction: column;
    `}
    ${mediaQueries.tablet`
      padding: 4rem 0.8rem;
    `}

      h2 {
        margin: 2rem 0;
        color: ${props => props.theme.colors.secondary};
        font-family: ${props => props.theme.fonts.head};
        font-size: 1rem;
        padding-bottom: 5px;
        position: relative;
        text-transform: uppercase;
        letter-spacing: .4rem;
        
        ::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: 0;
            left: 0;
            background: ${props => props.theme.gradients.second};
            transform-origin: bottom right;
            transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
        }

        &:hover {
          ::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        }
      }


    a {
      width: 100%;
      padding: 
      text-decoration: none;

      article {
        width: 100%;
  
        .content {
          height: 500px;
          width: 80%;
          overflow: hidden;
  
          img {
            width: 100%;
            transition: transform .5s ease;
  
            &:hover {
  
              transform: scale(1.2);
              filter: blur(2px);
            }
  
          }
          
        }
  
  
        .title {
          h3 {
            font-family: ${props => props.theme.fonts.head};
            color: ${props => props.theme.colors.secondary};
            text-decoration: none;
            padding: 2rem 0 0 0;
            
          }

          p {
            font-family: ${props => props.theme.fonts.body};
            color: ${props => props.theme.colors.secondary};
            text-decoration: none;
          }
        }
        ${mediaQueries.desktop_medium`
            padding: 4rem 0;
          `}
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
          <h2>Some articles I've written</h2>
          <section>
              {data.allContentfulBlogPost.edges.map(x => {
                return (
                  <div style={{padding: '1rem'}}>
                      <Link to={`/blog/${x.node.slug}`} style={{textDecoration: 'none'}}>
                      <article>
                        
                        <div className="content">
                          <img src={x.node.image.fixed.src} alt={x.node.image.description} />
                          
                          <div className="content-info">
                        </div>
                        </div>
                        {/* <div className="title">
                          <h3>{x.node.title}</h3>
                          <p>{x.node.publishedDate}</p>
                        </div> */}
                      </article>
                    </Link>
                  </div>
                  
                  
                )
              })}
            </section>
            
        </BlogContainer>
    )
}