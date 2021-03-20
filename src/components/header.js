import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import mediaQueries from '../styles/breakpoints'

import gsap from 'gsap'

const Nav = styled.nav` 
    border: 1px solid white;
    display: flex;
    flex-direction: column;

        button {
            align-self: flex-end;
            width: 40px;
        }

`
const StyledHeader = styled.header`
    
    margin-left: 160px;
    background-color:  ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.primary};
    width: 100%
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    ${mediaQueries.tablet`
    margin-left: 0;
    `}
    
    h3 {
        padding-left: 9rem;
        letter-spacing: .3rem;
        a {
            text-decoration: none;
            color: ${props => props.theme.colors.tertiary};
            font-family: ${props => props.theme.fonts.head};
            
        }
    }
    .nav_links {
        
        ul {
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            li {
                font-family: ${props => props.theme.fonts.head};
                font-weight: 600;
                padding: 2rem;
                list-style: none;
                a {
                    text-decoration: none;
                    color: ${props => props.theme.colors.dark};
                }
            }
        }
    }
`


export default function Header(){
    const [nav, setNav] = useState(false)

    gsap.to("header", {duration: 3, backgroundColor: '#e5e5e5'} )

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    menuLinks {
                        name
                        link
                      }
                }
            }
        }
    `)
    return (
        <Nav>
            <StyledHeader >
            <nav className='nav_links'>
                <ul>
                    {
                        data.site.siteMetadata.menuLinks.map(link => {
                            return (
                                <li key={link.name} style={{display: nav ? 'block' : 'none'}} >
                                     <Link to={link.link}>{link.name}</Link>
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </nav>
            </StyledHeader> 
            <button onClick={() => setNav(!nav)}>TEST</button>
        </Nav>
    )
}
