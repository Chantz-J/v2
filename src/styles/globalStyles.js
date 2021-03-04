import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    :root {
        --light: #EAF2F8; 
        --dark: #282936;
        
    }
    * {
        padding: 0;
        margin: 0;
        &:before {
            box-sizing: border-box;
        }
        &:after {
            box-sizing: border-box;
        }
    }
    
    ::selection {
        background-color: #e9e9e9;
        color: #fff;
    }
    
    footer {
        margin-top: auto;
    }
`
export default GlobalStyle