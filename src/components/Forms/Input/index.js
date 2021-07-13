import React from 'react'
import { motion } from "framer-motion"
import { useSelector } from 'react-redux'




  const styles = {
    opacity: 0,
    borderRadius: '5px',
    border: '1px solid #8892B0',
    margin: "1rem 0", 
    padding: '5px 5px',
    width: 200,
    fontSize: '8px',
    color: '#fff',
    outline: "none",
  }


  const variants = {
    active: {
      opacity: 1,
      background: "none",
      scale: 1.5,
      color: "#fff"
    },
    inActive: {
      width: '0px',
      height: '0px',
      opacity: 0,
      background: "none",
      color: "#fff"
    }
  }

const mapState = ({ message }) => ({
    isVisible: message.isVisible
})

export default function Input({placeholder, type, value}){
    const { isVisible } = useSelector(mapState)

    return (
        <motion.input
            style={styles}
            animate={isVisible ? "active" : "inActive"}
            variants={variants}
            placeholder={placeholder}
            type={type}
            value={value}
        />
    )
}