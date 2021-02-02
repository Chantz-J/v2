import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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
    section {
        margin-top: 2rem;
        padding: 60px 0;
        border-bottom: 1px solid #e5e5e5;

        .intro-Text {
            font-size: 2rem;
        }
    }
`
export default GlobalStyle