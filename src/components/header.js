import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import mediaQueries from '../styles/breakpoints'
 
import { Pivot as Hamburger } from 'hamburger-react'

const Nav = styled.nav` 
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.colors.dark};
    
    
        .button {
            margin: 20px;
            align-self: flex-end;
            transition: all .5s ease-in-out;
            width: 80px;
            height: 60px;
            color: ${props => props.theme.colors.secondary};
            background: ${props => props.theme.colors.dark};
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            cursor: none;

            &:hover {
                text-decoration: line-through;
                background: ${props => props.theme.colors.slighty_dark};
            }
            
        }
`
const StyledHeader = styled.header`
    transition: 0.30s ease-in-out;
    margin-left: 160px;
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
            padding-top: 70px;
            transition: 0.25s ease-in-out;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            background: ${props => props.theme.colors.dark};

            li {
                font-family: ${props => props.theme.fonts.head};
                font-weight: 600;
                padding: 2rem;
                list-style: none;


                a {
                    text-decoration: none;
                    transition: 0.25s ease-in-out;
                    color: ${props => props.theme.colors.secondary};
                    font-size: 2.5rem;
                    text-decoration: none;
                    padding-bottom: 1px;
                    
                    
                    

                }
            }
        }
    }
`


export default function Header(){
    const [nav, setNav] = useState(false)
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
            <StyledHeader id="reveal" style={{height: nav ? "57vh" : "0"}}>
            <nav className='nav_links' >
                <ul>
                    {
                        data.site.siteMetadata.menuLinks.map(link => {
                            return (
                                <li key={link.name}>
                                    <Link to={link.link}>
                                         {link.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </nav>
            </StyledHeader> 
            <button className="button" >
                <Hamburger 
                    toggled={nav} 
                    toggle={() => setNav(!nav)}
                />
            </button>
        </Nav> 
    )
}
