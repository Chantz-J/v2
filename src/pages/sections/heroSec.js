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
              <h1 style={{marginBottom: '1.2rem'}}>{data.site.siteMetadata.description}</h1>
              <ContactLink to='/contact'>Say Hello</ContactLink>
            </section>
          </HeroDiv>
          <SmallMenu>
            <section className="mini-nav">
              <ul className="nav-links">
                <ol className="link"><h3>Contact</h3></ol>
                <ol className="link"><h3>—Blog</h3></ol>
              </ul>
            </section> 
          </SmallMenu>
        </section>
    )
}

//STYLES
const ContactLink = styled(Link)`
  padding: 1.3rem;
  text-decoration: none;
  color: ${props => props.theme.colors.textColor};
  border-left: 1px solid ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.shade};
  transition: ease-in-out .2s;
  &:hover {
    opacity: 0.5;
  }
`

const HeroDiv = styled.div`
  
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
  
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-orientation: sideways;
  margin-bottom: 2rem;
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