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

    body {
      background: ${({ theme }) => theme.colors.blue[1]};
    }

    ::selection {
        background: ${props => props.theme.colors.lightGrey};
        
    }
    
    ::-webkit-scrollbar {
        width: 10px;
      }
      
     
      ::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.blue[1]};
      }
      
      
      ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.blue[0]};
        border-radius: 34px;

      }

      ::placeholder { 
        color: rgba(136, 146, 176, 0.1);
        opacity: 1; 
      }
      
      :-ms-input-placeholder { 
        color: rgba(136, 146, 176, 0.1);
      }
      
      ::-ms-input-placeholder { 
        color: rgba(136, 146, 176, 0.1);
      }
      
      
      
      

    footer {
        margin-top: auto;
    }
`
export default GlobalStyle