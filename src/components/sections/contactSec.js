import React, { useState } from 'react'
import styled from "styled-components"
import mediaQueries from '../../styles/breakpoints'

const ContactContainer = styled.div`
    background: ${props => props.theme.colors.dark};
    padding: 8rem 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    p {
        padding: 2rem 0;
        color: ${props => props.theme.colors.primary};
        font-family: ${props => props.theme.fonts.head};
        font-size: 1.7rem;
        text-transform: uppercase;
        letter-spacing: .5rem;
    }

    a {
        border: 1px solid ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.secondary};
        font-family: ${props => props.theme.fonts.head};
        font-size: .7rem;
        text-transform: uppercase;
        letter-spacing: .3rem;
        padding: .8rem;
        text-decoration: none;
    }

    .contact-info {

        .info {

            .snippet {
                color: ${props => props.theme.fonts.tertiary};
            }

        }

    }


`

export default function ContactSec(){
    return (
        <ContactContainer>
            <p>Contact</p>
            <a href="#">send me a message</a>
            <span></span>
            <div className="contact-info">
                <div className="info">
                    <p className="snippet">N - M - :</p>
                    <p>Chantz Johnson</p>
                </div>
            </div>
        </ContactContainer>
    )
}