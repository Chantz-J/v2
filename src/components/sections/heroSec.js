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
   ${mediaQueries.desktop_medium`
      padding: 0 5rem;
   `}
   ${mediaQueries.desktop`
      flex-direction: column;
      padding: 0 3rem;
   `}
   ${mediaQueries.tablet`
      padding: 0 1rem;
    `}
    ${mediaQueries.phablet`
      padding: 1rem;
    `}
    
   .wrapper { 
      padding-bottom: .5rem;
   }
   .container {
     background: ${props => props.theme.colors.dark};
     padding-bottom: 3rem;
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
      
     button {
       cursor: pointer;
       display: inline-block;
       position: relative;
       align-self: flex-start;
       margin: 1.4rem 0;
       color: ${props => props.theme.colors.secondary};
       background: ${props => props.theme.colors.dark};
       padding: .6rem;
       font-size: 1rem;
       border: none;
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
       
   }


   .name-box {
  
     font-size: 4rem;
     ${mediaQueries.desktop_medium`
     font-size: 2.8rem;
      `};
      ${mediaQueries.desktop`
     font-size: 2rem;
      `};
      ${mediaQueries.phablet`
     font-size: 1.5rem;
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
                  <p style={{textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,1px 1px 0 #fff'}}>{data.site.siteMetadata.description}</p>
                </h1>
                <button>Resume</button>
            </div>
          </div>
        </StyledHero>
    )
}
