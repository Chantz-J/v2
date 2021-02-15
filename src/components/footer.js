import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const StyledFooter = styled.div`
    grid-area: foot;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas: 
    "one two two two two two two two"
    "one two two two two two two two"
    "one two two two two two two two"
    "one two two two two two two two";
    grid-gap: 10px;
`

const Footer = () => {
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
        <footer>
           <StyledFooter>
                <p>Created by {data.site.siteMetadata.author} | {year}</p>
           </StyledFooter>
        </footer>
    )
}
export default Footer