import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const HeroDiv = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: flex-end;
  .intro {
    
    max-width: 60%;
    h1{
      font-size: 2.8vmax;
      padding-bottom: .7rem;
    }
    h4 {
      
    }
  }
`

export default function Hero() {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                description
                synopsis
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
    return(
        <section className="hero">
          <HeroDiv>
            <section className="intro">
              <h1>{data.site.siteMetadata.description}</h1>
            </section>
          </HeroDiv>
        </section>
    )
}