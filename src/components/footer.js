import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    left:0;
    bottom:0;
    right:0;
    padding-right: 15rem;
    padding-left: 15rem;
`


export default function Footer(){
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    let today = new Date()
    let year = today.getFullYear()
    return (
           <StyledFooter>
                <p>Created by {data.site.siteMetadata.author} | {year}</p>
           </StyledFooter>
    )
}
