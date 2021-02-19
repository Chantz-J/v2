import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    :root {
        --light: #EAF2F8; 
        --dark: #212F3C;
        --off-white: #e5e5e5;
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
    body {
        background-color: var(--light);
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    ul {
        list-style: none;
        display: flex;
        margin: 0;
    }
    li {
        color: #999999;
        text-decoration: none; 
        font-size: .9rem;
        margin-right: 1.3rem;
    }
    a {
        text-decoration: none;
        color: #999999;
    }

    header {
        padding: 2rem 0 3rem;
    }
    
    footer {
        margin-top: auto;
    }
`
export default GlobalStyle