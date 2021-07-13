import React from 'react'
import styled from "styled-components"
import { graphql, useStaticQuery } from 'gatsby'
import mediaQueries from '../../styles/breakpoints'
import SectionHeader from '../SectionHeader'
import PopButton from '../PopButton'


const ContactContainer = styled.div`
    background: ${props => props.theme.colors.blue[1]};
    padding: 8rem 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${mediaQueries.desktop_medium`
      padding: 6rem 5rem;
   `}
   ${mediaQueries.desktop`
      flex-direction: column;
      padding: 6rem 3rem;
   `}
   ${mediaQueries.tablet`
      padding: 6rem 1rem;
   `}
    ${mediaQueries.phablet`
      padding: 6rem 0;
   `}
    

    


`

export default function ContactSec(){
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    email
                }
            }
        }
    `)
    return (
        <ContactContainer>
            <SectionHeader text={"Contact"}/>
            <p style={{padding: 30}}>I'm currently open to new opportunities, and happily answer all types of inquiries.</p>
            <div style={{alignSelf:'center'}}><PopButton text={"Let's talk"} href='mailto:johnson.chantz@gmail.com'/></div>
        </ContactContainer>
    )
}