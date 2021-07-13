import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from "framer-motion"
import { Pivot as Hamburger } from 'hamburger-react'
import Input from '../Forms/Input'

import { openMessage, closeMessage } from '../../redux/Messages/messages.actions'

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    font-family: ${props => props.theme.fonts.head};
    height: 100px;
    color: #fff;
    

    .icon_container {
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .2s ease-in-out;
        &:hover {
         background: rgba(136, 146, 176, 0.1)
        }
    }
`

const styles = {
    opacity: 0,
    position: 'absolute',
    // border: '1px solid red',
    width: '400px',
    // height: '300px',
    marginTop: '100px',
    marginLeft: '80px',
    borderRadius: 30,
    // width: 100,
    // height: 100,
    // margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // color: "white",
    // cursor: "pointer"
  }

const variants = {
    active: {
      width: '400px',
      opacity: 1,
      background: "#202124",
      x: "100px",
      scale: 1.5,
      color: "#333",
      boxShadow: '0 0.125rem 0.375rem 0 rgba(0, 0, 0, 0.6)',
    },
    inActive: {
      width: '0px',
      height: '0px',
      opacity: 0,
      background: "#202124",
      x: "50px",
    //   scale: 1,
      color: "white"
    }
  }

const mapState = ({ message }) => ({
    isVisible: message.isVisible
})
export default function QuickContact(){
    const { isVisible } = useSelector(mapState)
    const dispatch = useDispatch()


    return (
        <StyledDiv>
            <div className="icon_container">
                <Hamburger 
                    toggled={isVisible} 
                    toggle={() => dispatch(isVisible ? closeMessage() : openMessage())}
                    color={'white'}
                />
            </div> 
            <motion.form
                style={styles}
                animate={isVisible ? "active" : "inActive"}
                variants={variants}
            >
                <h6 style={{color: "white"}}>Say something nice! 🤩</h6>
                <Input placeholder={"Your Name"}/>
                <Input placeholder={"Email"}/>
            </motion.form>
        </StyledDiv>
    )
}