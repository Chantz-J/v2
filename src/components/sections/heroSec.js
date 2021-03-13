import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'

const StyledHero = styled.section`
  
  padding: 3rem;
  h1 {
    a {
      text-decoration: none;
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
          <div className="container">
            <div className="row">
              <h2>
                <div className="line">
                  <span>{data.site.siteMetaData.description}</span>
                </div>
              </h2>
            </div>
          </div>
        </StyledHero>
    )
}

//STYLES




