import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '../icons/logo'


const Side = styled.aside`
  background-color: ${props => props.theme.colors.dark};
  height: 100%; 
  width: 160px; 
  position: fixed; 
  z-index: 1; 
  top: 0; 
  left: 0;
  overflow-x: hidden; 
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .sideways {
      height: 200px;
      text-transform: uppercase;
      font-size: .7rem;
      color: ${props => props.theme.colors.secondary};
      writing-mode: vertical-lr;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      h3 {
        font-family: ${props => props.theme.fonts.body};
        height: 80%;
      }
      .line {
          background-color: ${props => props.theme.colors.tertiary};
          width: 2px;
          height: 100px;
      }
  }
`

export default function Sidebar(){
    return (
        <Side>
            {/* <h1 style={{visibility: 'hidden'}}>Chantz</h1> */}
            <Link to='/'>
                <Logo />
            </Link>
            <div className="sideways">
                <h3>web developer</h3>
                <div className="line"></div>
            </div>
        </Side>
    )
}