import React from "react";
import { motion } from "framer-motion";

const styles = {
  // background: "#7fffd4",
  background: "#66D7EB",
  borderRadius: '11px',
//   width: 150,
  padding: "10px 20px",
//   margin: "auto",
  color: "#18212A",
  outline: "none",
  border: "none",
  cursor: "pointer",
  fontSize: '1rem',
  marginTop: "1rem",
  alignSelf: 'flex-start'
};

export default function PopButton({text, handleClick, href}){
  return (
      <a href={href}>
        <motion.button
        style={styles}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
        onClick={handleClick}
            >
        {text}
        </motion.button>
      </a>
  )
}