import React from 'react'
import styled from 'styled-components'
import mediaQueries from '../../styles/breakpoints'

const StyledDiv = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    width: 300px;
    justify-self: flex-end;


    h2 { 
        color: ${props => props.theme.colors.lightBlue} !important;
        font-family: ${props => props.theme.fonts.head};
        width:100%; 
        border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
        1px solid #000; 
        line-height:0.1em; 
        margin:10px 0 20px; 
    
    
    } 

    h2 span { 
        background: ${props => props.theme.colors.blue[1]}; 
        padding:0 10px; 
    }

`

export default function SectionHeader({ text }){
    return (
        <StyledDiv>
            <h2>
                <span>{ text }</span>
            </h2>
        </StyledDiv>
    )
}