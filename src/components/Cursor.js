import React, { useEffect } from "react"
import styled from  'styled-components'
import { motion, useMotionValue, useSpring } from "framer-motion"

const StyledCursor = styled.div`
    .cursor {
        position: fixed;
        left: 0;
        top: 0;
        width: 32px;
        height: 32px;
        border-radius: 16px;
        background-color: white;
        mix-blend-mode: difference;
        z-index: 999;
        pointer-events: none;
    }
`

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
      <StyledCursor>
        <motion.div
            className="cursor"
            style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
            }}
        />
      </StyledCursor>
  )
}