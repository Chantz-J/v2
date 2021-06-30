import React from 'react'
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons } from './FooterElements'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Github from '../icons/github'
import LinkedIn from '../icons/linkedIn'

import mediaQueries from '../styles/breakpoints'

const StyledFooter = styled.footer`
    padding: 0 1rem;
    min-height: 13vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: ${props => props.theme.colors.dark};
    font-family: ${props => props.theme.fonts.head};
    color: ${props => props.theme.colors.secondary};
    margin-left: 160px;
   ${mediaQueries.desktop_medium`
      padding: 0 5rem;
   `}
   ${mediaQueries.desktop`
      padding: 0 3rem;
   `}
   ${mediaQueries.tablet`
      margin-left: 0;
      padding: 0 1rem;
   `}
   ${mediaQueries.phablet`
      padding: 1rem;
   `}
    
    ul {
        width: 47%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        li {
            font-size: .8rem;
            list-style: none;
        }
    }

    .icon_box {
        width: 47%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .icon {
            color: ${props => props.theme.colors.tertiary};
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
                    github
                    linkedIn
                }
            }
        }
    `)

    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     })
    // }

    let today = new Date()
    let year = today.getFullYear()
    return (
        //    <StyledFooter>
        //       <ul>
        //          <li>C</li>
        //          <li>O</li>
        //          <li>N</li>
        //          <li>N</li>
        //          <li>E</li>
        //          <li>C</li>
        //          <li>T</li>
        //       </ul>
        //       <div className="icon_box">
        //           <div className="icon">
        //               <a href={data.site.siteMetadata.github} target="_blank" rel="noreferrer"><Github /></a>
        //           </div>
        //           <div className="icon">
        //               <a href={data.site.siteMetadata.linkedIn} target="_blank" rel="noreferrer"><LinkedIn /></a>
        //           </div>
        //       </div>
        //    </StyledFooter>
        <FooterWrapper>

        </FooterWrapper>

    )
}
