import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import mediaQueries from '../../styles/breakpoints'


import Banner from '../Banner'
import HeroImage from '../HeroImage'


const StyledHeader = styled.h1`
  width: 100%;
  color: ${props => props.theme.colors.blue[0]};
  font-family: ${props => props.theme.fonts.head};
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 2rem;
  font-size: 4.1rem;
  ${mediaQueries.desktop_medium`
  font-size: 2.8rem;
  `};
  ${mediaQueries.desktop`
  font-size: 2rem;
  `};
  ${mediaQueries.phablet`
  font-size: 1.5rem;
  `};
`

const StyledHero = styled.section`
   padding: 0 4rem;
   background-color: ${props => props.theme.colors.blue[1]};
   height: 90vh;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-end;
   ${mediaQueries.desktop_medium`
      padding: 0 5rem;
   `}
   ${mediaQueries.desktop`
      flex-direction: column;
      padding: 0 3rem;
   `}
   ${mediaQueries.tablet`
      padding: 0 1rem;
    `}
    ${mediaQueries.phablet`
      padding: 1rem;
    `}
    
   .wrapper { 
      z-index: 3;
      padding-bottom: .5rem;
      margin: 2rem 0;
      width: 500px;
      box-shadow: 0 0.125rem 0.375rem 0 rgba(0, 0, 0, 0.12);
      padding: 2rem;
      background: ${props => props.theme.colors.blue[0]};
      ${mediaQueries.phablet`
        width: 100%;
        background-color: #1B263199;
        align-self: center;
        margin: 1rem;
      `}
   }
   .container {
     background: ${props => props.theme.colors.blue[0]};
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     ${mediaQueries.phablet`
        background-color: transparent;
      `}
   }


   .name-box {
     font-size: 1rem;
     ${mediaQueries.desktop_medium`
     font-size: 2.8rem;
      `};
      ${mediaQueries.desktop`
     font-size: 2rem;
      `};
      ${mediaQueries.phablet`
     font-size: 1.5rem;
      `};

     h1 {
       width: 100%;
       color: ${props => props.theme.colors.secondary};
       font-family: ${props => props.theme.fonts.head};
       font-size: 2.1rem;
       font-weight: 400;
       line-height: 1.2;
       margin-bottom: 2rem;
       align-self: flex-start;
     }

     p {
      color: ${props => props.theme.colors.grey};
      font-size: 1.2rem;
   }
   
`

export default function Hero() {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
                description
                end
                menuLinks {
                  name
                  link
                }
            }
        }
      }
  `)

    return (
        // <StyledHero>
        //   <HeroImage />
        //   <SectionHeader text={'Hello there'}/>
        //   <div className="wrapper">
        //     <div className="name-box container">
        //         <StyledHeader>
        //           {data.site.siteMetadata.description}
        //         </StyledHeader>
        //         <p>{data.site.siteMetadata.end}</p>
        //     </div>
        //   </div>
          
        // </StyledHero>
        <Banner />
    )
}
