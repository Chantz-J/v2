import React from 'react'
import styled from "styled-components"
import { graphql, useStaticQuery } from 'gatsby'
import mediaQueries from '../../styles/breakpoints'

const ContactContainer = styled.div`
    background: ${props => props.theme.colors.dark};
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
    

    p {
        padding: 2rem 0;
        color: ${props => props.theme.colors.primary};
        font-family: ${props => props.theme.fonts.head};
        font-size: 1.7rem;
        text-transform: uppercase;
        letter-spacing: .5rem;
        z-index: 0;
    }

    a {
        border: 1px solid ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.secondary};
        font-family: ${props => props.theme.fonts.head};
        font-size: .7rem;
        text-transform: uppercase;
        letter-spacing: .2rem;
        padding: .8rem;
        margin: 0 0 1rem 0;
        text-decoration: none;
        transition: ease-in-out .5s;
        z-index: 0;

        &:hover {
            background: ${props => props.theme.colors.slighty_dark};
        }
    }

    .contact-info {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 0;

        .info {
            display: flex;
            flex-direction: column;
            align-items: center;

            .snippet {
                color: ${props => props.theme.colors.tertiary};
                font-size: .8rem;
                padding: .6rem 0; !important
            }
            .full {
                color: ${props => props.theme.colors.secondary};
                font-size: .8rem;
                padding: .6rem 0; !important
            }

            ${mediaQueries.phablet`
                .stubborn {
                    font-size: .5rem;
                }
            `}
            ${mediaQueries.phone_small`
                .stubborn {
                    display: none;
                }
            `}

        }

    }


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
            <p>Contact</p>
            <a href={`mailto:${data.site.siteMetadata.email}`}>send me a message</a>
            <span></span>
            <div className="contact-info">
                <div className="info">
                    <p className="snippet">N - M - :</p>
                    <p className="full">{data.site.siteMetadata.author}</p>
                </div>
                <div className="info">
                    <p className="snippet">- G - :</p>
                    <p className="full">22 y.o</p>
                </div>
                <div className="info">
                    <p className="snippet">M - - L :</p>
                    <p className="full stubborn">{data.site.siteMetadata.email}</p>
                </div>
                <div className="info">
                    <p className="snippet">P H - N - :</p>
                    <p className="full">+1 8139932504</p>
                </div>
            </div>
        </ContactContainer>
    )
}