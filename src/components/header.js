import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import mediaQueries from '../styles/breakpoints'


const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    height: 128px;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mediaQueries.phone`
        height: 96px;
  `}
`
const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    ul {
        list-style: none;
        display: flex;
        margin: 0;
        li {
            
            text-decoration: none; 
            font-size: .9rem;
            margin-right: 1.3rem;
            a {
                text-decoration: none;
            }
        }
    }

    span {

    }
`

const Navbar = styled.nav`
    width: 25px;
    ${mediaQueries.phone`
        width: 10px;
    `},
    span {
        margin-bottom: .3rem;
        background: ${props => props.theme.colors.dark};
        height: 2px;
        display: block;
    }
`

const LogoLink = styled(Link)`
    margin-left: 3rem;
    font-size: 1.2rem;
    letter-spacing: .5rem;
    color: ${props => props.theme.colors.dark};
    text-decoration: none;
    font-weight: 700;
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
            <LogoLink to='/'>CHANTZ.</LogoLink>
            <Navbar style={{marginRight: '3rem'}}>
                <span></span>
                <span></span>
            </Navbar>
            {/* <StyledNav>

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
            </StyledNav> */}
        </StyledHeader>
    )
}
