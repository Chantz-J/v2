import { createGlobalStyle } from 'styled-components'
import mediaQueries from './breakpoints'


const GlobalStyle = createGlobalStyle`
    :root {
        --light: #EAF2F8; 
        --dark: #282936;
        
    }
    * {
        font-size: 100%;
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
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.dark};
    }
    ::-webkit-scrollbar {
        width: 20px;
      }
      ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.dark};
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 20px;
        border: 6px solid transparent;
        background-clip: content-box;

        &:hover {
            background: #fff;
        }
      }

    footer {
        margin-top: auto;
    }
`
export default GlobalStyle