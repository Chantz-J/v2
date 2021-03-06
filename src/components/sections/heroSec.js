import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import mediaQueries from '../../styles/breakpoints'


const StyledHero = styled.section`
   padding: 0 7rem;
   background-color: ${props => props.theme.colors.dark};
   height: 80vh;
   display: flex;
   align-items: center;
   justify-content: center;
   ${mediaQueries.desktop`
      flex-direction: column;
   `}


   .wrapper { 
      padding-bottom: .5rem;
      background: ${props => props.theme.gradients.second};
   }
   .container {
     background: ${props => props.theme.colors.dark};
     padding-bottom: 3rem;
     width: 100%;
     display: flex;
     align-items: center;
     
   }
   .name-box {
  
     font-size: 4rem;
     ${mediaQueries.desktop_medium`
     font-size: 2.8rem;
      `};
      ${mediaQueries.desktop`
     font-size: 2rem;
      `};

     h1 {
       width: 100%;
       color: ${props => props.theme.colors.dark};
       font-family: ${props => props.theme.fonts.head};
       font-weight: bold;
       

     }
   }
   .description {
    
     display: flex;
     justify-content: center;
     p {
      font-family: ${props => props.theme.fonts.body};
      color: ${props => props.theme.colors.secondary};
      width: 40%;
      line-height: 1.9;
     }
   }
`


export default function Hero() {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
                description
                menuLinks {
                  name
                  link
                }
                lineSpans {
                  text
                  id
                }
            }
        }
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
                slug
              }
            }
          }
        }
      }
  `)
    return (
        <StyledHero>
          <div className="wrapper">
            <div className="name-box container">
                <h1>
                  {/* <p style={{color: '#fff'}}>Chantz</p> */}
                  <p style={{textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,1px 1px 0 #fff'}}>{data.site.siteMetadata.description}</p>
                </h1>
            </div>
          </div>
          {/* <div className="description container">
              <p>{data.site.siteMetadata.description}</p>
          </div> */}
        </StyledHero>
    )
}
