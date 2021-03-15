import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import mediaQueries from '../styles/breakpoints'

const StyledHeader = styled.header`
    margin-left: 160px;
    background-color:  ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.primary};
    width: 100%
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
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
        padding: .8rem 4rem;
        ul {
            display: flex;
            align-items: center;

            li {
                font-family: ${props => props.theme.fonts.head};
                font-weight: 600;
                padding: 2rem;
                list-style: none;
                a {
                    text-decoration: none;
                    color: ${props => props.theme.colors.secondary};
                }
            }
        }
    }
`


export default function Header(){
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
        <StyledHeader>
            {/* <h3><Link to='/'>{data.site.siteMetadata.title}</Link></h3> */}
            <nav className='nav_links'>
                <ul>
                    {
                        data.site.siteMetadata.menuLinks.map(link => {
                            return (
                                <li key={link.name}>
                                     <Link to={link.link}>{link.name}</Link>
                                </li>
                            )
                        })
                    }

                </ul>
            </nav>
        </StyledHeader>   
    )
}
