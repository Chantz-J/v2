import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import ArrowUp from '../icons/ArrowUp'

import mediaQueries from '../styles/breakpoints'

const StyledFooter = styled.footer`
    padding: 0 1rem;
    min-height: 13vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #3a3a3a;
    background: ${props => props.theme.colors.dark};
    font-family: ${props => props.theme.fonts.head};
    color: ${props => props.theme.colors.secondary};
    margin-left: 160px;
    ${mediaQueries.desktop_medium`
        justify-content: space-evenly;
    `}
    ${mediaQueries.phablet`
      margin-left: 0;
      padding: 1rem;
    `}
    ${mediaQueries.tablet`
        flex-direction: column;
    `}
    
     .copyright {
         font-family: ${props => props.theme.fonts.body};
         display: flex;
         width: 13%;
         display: flex;
         justify-content: space-between;
     }

     .quick-contact {
         font-family: ${props => props.theme.fonts.body};
         display: flex;
         justify-content: space-between;
         width: 25%;
         ${mediaQueries.desktop_medium`
          flex-direction: column;
        `}

     }

     button {
        outline: none;
        transition: 0.25s ease-in-out;
        padding: .5rem;
        border: 1px solid white;
        border-radius: 50%;
        width: 50px;
        color: ${props => props.theme.colors.secondary};
        background: ${props => props.theme.colors.dark};

        &:hover {
            cursor: pointer;
            color: ${props => props.theme.colors.dark};
            background: ${props => props.theme.colors.secondary};
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
                    email
                }
            }
        }
    `)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


    let today = new Date()
    let year = today.getFullYear()
    return (
           <StyledFooter>
               <div className="copyright">
                    <h6>&copy; {data.site.siteMetadata.author}</h6>
                    <p>{year}</p>
               </div>
               <div className="quick-contact">
                   <div className="contact">
                      <p>
                        <a style={{color: '#e5e5e5'}} href={`mailto:${data.site.siteMetadata.email}`}>{data.site.siteMetadata.email}</a>
                      </p>
                      <p>+1(813)993-2504</p>
                   </div>
                   <button onClick={() => scrollToTop()}>
                     <ArrowUp />
                   </button>
               </div>
           </StyledFooter>
    )
}
