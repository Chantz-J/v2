import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`

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
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.dark};
    }
    
    ::-webkit-scrollbar {
        width: 10px;
      }
      
     
      ::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.dark};
      }
      
      
      ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.tertiary};
        border-radius: 34px;
        
        &:hover {
            background: ${props => props.theme.colors.secondary};
        }
      }
      
      
      

    footer {
        margin-top: auto;
    }
`
export default GlobalStyle