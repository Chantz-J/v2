import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import mediaQueries from '../styles/breakpoints'

// padding-right: 15rem;
//     padding-left: 15rem;

const StyledFooter = styled.footer`
    min-height: 40vh;
    display: flex;
    font-family: ${props => props.theme.fonts.head};
    color: ${props => props.theme.colors.secondary};
    margin-left: 160px;
    ${mediaQueries.phablet`
      margin-left: 0;
     `}


    .container {
        padding: 1.7rem;
        max-width: 340px;

        h3 {
            color: ${props => props.theme.colors.dark};
            text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,1px 1px 0 #fff;
            font-size: 3rem;
        }
    }

    .mini-nav {
        h6 {
            a {
                text-decoration: none;
                color: ${props => props.theme.colors.tertiary};
        
            }
        }
    }
    
`


export default function Footer(){
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    end
                    menuLinks {
                        name
                        link
                      }
                }
            }
        }
    `)

    let today = new Date()
    let year = today.getFullYear()
    return (
           <StyledFooter>
                <div className="container">
                    <h3>{data.site.siteMetadata.end}</h3>
                </div>
                <div className="container mini-nav">
                    <h2>Explore</h2>
                    {
                        data.site.siteMetadata.menuLinks.map(link => {
                            return (
                                <h6 key={link.name}>
                                     <Link to={link.link}>{link.name}</Link>
                                </h6>
                            )
                        })
                    }
                </div>
                <div className="container"></div>
           </StyledFooter>
    )
}
