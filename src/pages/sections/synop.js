import React from 'react'
import styled from 'styled-components'

import "fontsource-roboto/300.css"

const StyledSyn = styled.section`
    display: flex;
    align-items: center;
    grid-area: syp;
    border: 1px solid black;
    padding: 2em 0;
    .project {
        box-shadow: 0 10px 30px -15px var(--off-white);
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        height: 100%;
        padding: 2rem 1.75rem;
        border-radius: 4px;
        background-color: var(--dark);
    }
    
`

export default function Synopsis() {
    return (
        <StyledSyn>
            <div className="info">
                <h2>Who am I</h2>
                <p>Ueno is a full-service agency, busy designing and building beautiful digital products, brands, and experiences. For more informations go to ueno.co.</p>
            </div>
            <div className="project-container">
                <div className="project">
                    <div className="header"></div>

                </div>
            </div>
        </StyledSyn>
    )
}