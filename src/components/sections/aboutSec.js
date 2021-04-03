import React from 'react'
import styled from "styled-components"
import mediaQueries from '../../styles/breakpoints'


const AboutContainer = styled.section`
    background: ${props => props.theme.colors.dark};
    padding: 8rem 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    

    h2 {
        padding: 1rem;
        color: ${props => props.theme.colors.secondary};
        font-family: ${props => props.theme.fonts.head};
        align-self: flex-start;
        font-size: 1.7rem;
        text-transform: uppercase;
        letter-spacing: .4rem;
        padding-bottom: 5px;
        position: relative;

        ::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(1);
            height: 2px;
            bottom: 0;
            left: 0;
            background: ${props => props.theme.gradients.second};
            transform-origin: bottom left;
            transition: transform .6s cubic-bezier(0.53, 0.21, 0, 1)
        }
    
        &:hover {
            ::after {
                transform: scaleX(0);
                transform-origin: bottom right;
            }
          }
        }
        

    }

    .info-box {
        align-self: flex-start;
        background: ${props => props.theme.colors.dark};
        color: ${props => props.theme.colors.primary};
        font-family: ${props => props.theme.fonts.head};
        width: 59%;
        padding-top: 3rem;
        ${mediaQueries.desktop_small`
            width: 100%;
        `}

        p {
            
            padding: 1rem;
            letter-spacing: .15rem;
            position: relative;

        }

        a {
            text-decoration: none;
            padding-bottom: 1px;
            color: #FC575E;
            position: relative;

            ::after {
                content: '';
                position: absolute;
                height: 2px;
                width: 100%;
                left: 0;
                bottom: 0;
                opacity: 0;
                transform: translateY(3px);
                background: ${props => props.theme.gradients.second};
                transition: opacity 0.2s ease, transform 0.2s ease;
            }
            
            &:hover {
                ::after {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }




    }

`


export default function About(){
    return (
        <AboutContainer>
            <h2>About Me</h2>
            <div className="info-box">
                <p>Hello! My name is Chantz and I am eager to create convenient and remarkable user experiences. My interest in programming started back in 2019 when I decided to automate the setup of network printers using Powershell — turns out hacking together the solution was challenging and rewarding.</p>
                <p>Fast-forward to today, and I've had the privilege of attending <a href='https://lambdaschool.com/' target="_blank" rel="noopener noreferrer">Lambda School</a>, where I learned industry standard technologies while working on meaningful projects daily. My main focus these days is building responsive, accessible, digital experiences.</p>
            </div>
        </AboutContainer>
    )
}