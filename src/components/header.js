import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Arrow from '../icons/arrow'

const StyledButton = styled.button`
    background-color: var(--white);
    width: 2.7rem;
    border-radius: 13px;
    outline: none;
    border: none;
    color: var(--white);
    transition: ease-in-out .2s;
    &:hover {
        border: 1px solid var(--dark);
        transition: ease-in-out .2s;
    }
`

export default function Header(){
    const [toggle, setToggle] = useState(false)
    const [visible , setVisible] = useState('none')

    const handleClick = () => {
        setToggle(!toggle)
        setVisible(toggle === false ? 'none' : 'block') 
    }

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
        <header>
            <nav>
                <h2><Link to='/'>{data.site.siteMetadata.title}</Link></h2>
                <div>
                    <StyledButton onClick={handleClick}>
                       <Arrow />
                    </StyledButton>
                    <div style={{display: visible}}>
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
                    </div>


                </div>
                {/* <ul>
                    {
                        data.site.siteMetadata.menuLinks.map(link => {
                            return (
                                <li key={link.name}>
                                     <Link to={link.link}>{link.name}</Link>
                                </li>
                            )
                        })
                    }

                </ul> */}
            </nav>
        </header>
    )
}
