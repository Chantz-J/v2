import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'



const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;
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
                color: ${props => props.theme.colors.textColor};
            }
        }
    }

`

export default function Header(){
    
    // const [toggle, setToggle] = useState(false)
    // const [visible , setVisible] = useState('none')

    // const handleClick = () => {
    //     setToggle(!toggle)
    //     setVisible(toggle === false ? 'none' : 'block') 
    // }
    


    

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
        <header >
           
            
            <StyledNav>
                {/* <div>
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


                </div> */}
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
            </StyledNav>
        </header>
    )
}
