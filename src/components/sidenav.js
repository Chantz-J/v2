import React from 'react'
import styled from 'styled-components'

// const StyledSideNav = styled.div`
//     height: 100%; 
//     width: 160px; 
//     position: fixed; 
//     z-index: 1; 
//     top: 0; 
//     left: 0;
//     background-color: inherit; 
//     overflow-x: hidden; 
//     padding-top: 20px;
//     border-right: 1px solid var(--off-white);

// `

const StyledSideNav = styled.div`
    grid-area: one;
    border-right: 1px solid var(--off-white);
`

const Sidenav = () => {
    return  (
        
            <StyledSideNav>

            </StyledSideNav>
        
    )
}
export default Sidenav