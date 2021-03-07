import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'


export default function Hero() {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
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
    return(
        <section className="hero" style={{display: 'flex', flexDirection: 'column'}}>
          <HeroDiv>
            <section className="intro">
              <h1>{data.site.siteMetadata.description}</h1>
              <ContactLink to='/contact'>Hello</ContactLink>
            </section>
          </HeroDiv>
          <SmallMenu>
            <section className="mini-nav">
              <ul className="nav-links">
                <ol className="link"><h3>Hello</h3></ol>
                <ol className="link"><h3>—Hello</h3></ol>
              </ul>
            </section>
          </SmallMenu>
        </section>
    )
}

//STYLES
const ContactLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.textColor}
`

const HeroDiv = styled.div`
  border: 1px solid black;
  min-height: 47vh;
  display: flex;
  align-items: flex-end;
  .intro {
    
    max-width: 60%;
    h1{
      font-size: 2.5vmax;
      padding-bottom: .7rem;
    }
    h4 {
      
    }
  }
`

const SmallMenu = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-orientation: sideways;
  .mini-nav {
    
    .nav-links {
      writing-mode: vertical-lr;
      .link {
        text-transform: uppercase;
        font-weight: 400;
      }
    }
  }
`