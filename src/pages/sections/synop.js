import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import "fontsource-roboto/300.css"

const StyledSyn = styled.section`
    display: flex;
    align-items: center;
    grid-area: syp;
    padding: 2em 0;
    width: 70%;
`

export default function Synopsis() {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                synopsis
            }
        }
    }
  `)
    return (
        <StyledSyn>
            <div className="info">
                <h2>Who am I</h2>
                <p>{data.site.siteMetadata.synopsis}</p>
            </div>
            
        </StyledSyn>
    )
}