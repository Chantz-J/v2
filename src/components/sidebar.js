import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import mediaQueries from '../styles/breakpoints'
import Logo from '../icons/logo'

import QuickContact from '../components/QuickContact'

// border-right: 2px solid ${props => props.theme.colors.lightGrey};
// overflow-x: hidden; 
const Side = styled.aside`
  background-color: ${props => props.theme.colors.blue[1]};
  height: 100%; 
  width: 160px; 
  position: fixed; 
  z-index: 1; 
  top: 0; 
  left: 0;
  
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${mediaQueries.tablet`
      display: none; 
   `}
  

  .sideways {
      height: 270px;
      text-transform: uppercase;
      font-size: .7rem;
      color: ${props => props.theme.colors.secondary};
      writing-mode: vertical-lr;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      h3 {
        font-family: ${props => props.theme.fonts.head};
        color: ${props => props.theme.colors.secondary};
        font-size: 1rem;
        height: 80%;
      }
      .line {
          background-color: ${props => props.theme.colors.lightGrey};
          width: 2px;
          height: 270px;
      }
  }
`



export default function Sidebar(){
    return (
        <Side>
            <Link to='/'>
                <Logo />
            </Link>
            {/* <QuickContact /> */}
            <div className="sideways">
                <h3>web developer</h3>
                <div className="line"></div>
            </div>
        </Side>
    )
}