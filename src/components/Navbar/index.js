import React from 'react'
import styled from 'styled-components'
import mediaQueries from '../../styles/breakpoints'
import { Link, graphql, useStaticQuery } from 'gatsby'



const StyledNav = styled.nav`
    background: ${props => props.theme.colors.blue[1]};
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    
   ${mediaQueries.phablet`
    margin-left: 0;
   `}

   ${mediaQueries.tablet`
    display: none;
    `}

        ul {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            list-style-type: none;
            width: 600px;
            


            li, a {
                color: ${ props  => props.theme.colors.secondary};
                font-family: ${props => props.theme.fonts.head};
                font-size: 1.4rem;
                font-weight: 300;
                text-decoration: none;
                line-height: 1.2;
            }
        }

`

export default function Navbar(){
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
        <StyledNav>
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
        </StyledNav>
    )
}
