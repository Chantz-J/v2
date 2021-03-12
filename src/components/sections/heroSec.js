import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'


export default function Hero() {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
                description
                synopsis
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
          <h6>Good Evening!</h6>
          <h1><Link to='/'>I'm {data.site.siteMetadata.author}</Link></h1>
        </StyledHero>
    )
}

//STYLES
const StyledHero = styled.section`
  
  padding: 3rem;
  h1 {
    a {
      text-decoration: none;
    }
    
  }
`



