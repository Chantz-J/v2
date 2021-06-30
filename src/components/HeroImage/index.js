import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import mediaQueries from '../../styles/breakpoints'

const ImageContainer = styled.div`
    position: absolute;
    left: 34%;
    z-index: 1;
    height: 86vh;
    width: 39vw;
    padding: .7rem;
    box-shadow: 0 0.125rem 0.375rem 0 rgba(0, 0, 0, 0.12);
    background: ${props => props.theme.colors.blue[0]};
    margin: 0 auto;
    ${mediaQueries.tablet`
        left: 2%;
        height: 86vh;
        width: 90%;
    `}

    
`


export default function HeroImage(){
    return (
        <ImageContainer>
            <StaticImage
                // src='https://i.pinimg.com/236x/bd/61/e8/bd61e86876fcda7dcbc443cec6c9e1d2.jpg'
                src='https://i.pinimg.com/564x/d9/2e/5a/d92e5a26ce38e77a61013c3410a8a10f.jpg'
                alt='Hero image'
                placeholder="blurred"
                breakpoints={[750, 1080, 1366, 1920]}
                // objectFit="cover"
                style={{width: '100%', height: '86vh'}}
                // height={900}
            />
        </ImageContainer>
    )
}