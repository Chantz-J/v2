import React, { useState } from 'react'
import styled from "styled-components"
import mediaQueries from '../../styles/breakpoints'

import User from '../../icons/user'
import Pencil from '../../icons/pencil'
import Terminal from '../../icons/terminal'

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
    
    p {
        margin: 1rem;
        color: ${props => props.theme.colors.secondary};
        font-family: ${props => props.theme.fonts.head};
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: .5rem;
        padding-bottom: 5px;
        position: relative;
    }

    .container {
        position: relative;
        margin: 20px auto;
        width: 500px;
        border-radius: 2px;
        ${mediaQueries.tablet`
          width: 100%;
        `}

        .tabs {
            padding: 0 20px;
            display: flex;
            position: relative;
            z-index: 3;
            width: max-content;
            ${mediaQueries.phone`
              width: 100%;
              padding: 0;
            `}

            .tab {
                width: 100px;
                text-align: center;
                background: ${props => props.theme.colors.dark};
                font-family: ${props => props.theme.fonts.head};
                font-size: 14px;
                padding: 10px 0;
                transition: all 0.25s ease;
                display: inline-block;
                color: ${props => props.theme.colors.tertiary};
                text-decoration: none;
                text-decoration-skip-ink: auto;
                cursor: pointer;

                &:hover {
                    color: ${props => props.theme.colors.primary};
                    background: ${props => props.theme.colors.slighty_dark};
                }

                &.active {
                    background: ${props => props.theme.colors.slighty_dark};
                    color: ${props => props.theme.colors.primary};
                }

            }

            .highlighter {
                display: block;
                background: $purple;
                position: absolute;
                height: 2px;
                left: 0;
                bottom: 0;
                max-width: 100px;
                width: 100%;
                transform: translateX(0);
                transition: transform 0.2s ease;
                transition-delay: 0.1s;
                z-index: 10;
            }

            a:first-of-type {
                border-top-left-radius: 2px;
              }
              a:last-of-type {
                border-top-right-radius: 2px;
              }



        }


        .content {
            position: relative;
            background-color: ${props => props.theme.colors.dark};
            padding: 20px;
            box-shadow: 0 0.125rem 0.375rem 0 rgba(0, 0, 0, 0.12);

            p {
                text-transform: none;
                letter-spacing: .3rem;

                a {
                    color: ${props => props.theme.colors.tertiary};
                    transition: ease-in-out .5s;
                    &:hover {
                        color: ${props => props.theme.colors.primary};
                    }

                }
            }
        
            &__section {
              position: absolute;
              top: 0;
              left: 0;
              opacity: 0;
              z-index: 0;
              transition: opacity 0s ease;
        
              &.visible {
                position: relative;
                opacity: 1;
                width: 100%;
                height: auto;
                transition: opacity 0.5s ease;
                z-index: 2;
              }
            }
          }

    }

`

export default function About(){

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <AboutContainer>
            <p style={{fontSize: '1.7rem'}}>About</p>
            <div className="container">
                <div class="tabs">
                    <div 
                        className={toggleState === 1 ? "tab tab-1 active" : "tab tab-1"}  
                        onClick={() => toggleTab(1)}>
                        <User />
                    </div>
                    <div 
                        className={toggleState === 2 ? "tab tab-2 active" : "tab tab-2"}  
                        onClick={() => toggleTab(2)}>
                        <Pencil />
                    </div>
                    <div 
                        className={toggleState === 3 ? "tab tab-3 active" : "tab tab-3"}   
                        onClick={() => toggleTab(3)}>
                        <Terminal />
                    </div>
                    <span className="highlighter"></span>
                </div>
                <div className="content">
                    <div className={toggleState === 1 ? "content__section visible" : "content__section"}>
                        <p>Hello! My name is Chantz and I am eager to create convenient and remarkable user experiences. My interest in programming started back in 2019 when I decided to automate the setup of network printers using Powershell — turns out hacking together the solution was challenging and rewarding.</p>
                    </div>
                    <div className={toggleState === 2 ? "content__section visible" : "content__section"}>
                        <p>Fast-forward to today, and I've had the privilege of attending <a href='https://lambdaschool.com/' target="_blank" rel="noopener noreferrer">Lambda School</a>, where I learned industry standard technologies while working on meaningful projects daily.</p>
                    </div>
                    <div className={toggleState === 3 ? "content__section visible" : "content__section"}>
                        <p>My main focus these days is building responsive, accessible, digital experiences.</p>
                    </div>
                </div>
            </div>
        </AboutContainer>
    )
}