import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import mediaQueries from '../styles/breakpoints'

import Layout from '../components/layout'
import Head from '../components/head'

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background: ${props => props.theme.colors.dark};
    margin-left: 160px;
    ${mediaQueries.phablet`
        margin-left: 0;
    `}

    h1 {
        color: ${props => props.theme.colors.dark};
        font-family: ${props => props.theme.fonts.head};
        text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,1px 1px 0 #fff;
        font-size: 10rem;
        padding-bottom: 1px;
        position: relative;

        ::after {
            content: '';
            position: absolute;
            height: 2px;
            width: 100%;
            left: 0;
            bottom: 0;
            opacity: 0;
            transform: translateY(3px);
            background: ${props => props.theme.gradients.second};
            transition: opacity 0.2s ease, transform 0.2s ease;

        }

        &:hover {
            ::after {
                opacity: 1;
                transform: translateY(0);
            }
        }

    }

    h2 {
        margin-top: 3rem;
        color: ${props => props.theme.colors.secondary};
        font-family: ${props => props.theme.fonts.head};
        font-size: 2rem;
    }
    a {
        color: ${props => props.theme.colors.secondary};
        font-family: ${props => props.theme.fonts.body};
        font-size: 1rem;
        text-decoration: none;
    }
`

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <StyledMain>
                <h1>404</h1>
                <h2>You just hit a route that does not exist. The sadness...</h2>
                <Link to='/'><p>Go Home</p></Link>
            </StyledMain>
        </Layout>
    )
}
export default NotFound