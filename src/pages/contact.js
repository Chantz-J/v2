import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import mediaQueries from '../styles/breakpoints'

import Layout from '../components/layout'
import Head from '../components/head'

const StyledMain = styled.main`
  margin-left: 160px;
  ${mediaQueries.phablet`
    margin-left: 0;
   `}
   

   .form-section {
        padding: 3rem;
        width: 100%;
        height: 100vh;
        display: flex;
        background: ${props => props.theme.colors.dark};

    .contact-text {
        width: 700px;
        height: 100vh;
        
        
        h1 {
            color: ${props => props.theme.colors.secondary};
            font-family: ${props => props.theme.fonts.head};
            font-size: 3rem;
            margin: 2rem 0;
        }
        h6 {
            color: ${props => props.theme.colors.tertiary};
            font-family: ${props => props.theme.fonts.body};
            font-size: 3rem;
        }
    }

    .form-wrapper {
        width: 100%;
        height: 100vh;
        
        
        .contact-form {
            display: flex;
            flex-direction: column;

            input {
                
            }

            textarea {
                width: 50px
            }
        }
    }

 }


`

export default function Contact(){
    return (
        <Layout>
            <Head title="Contact"/>
            <StyledMain>
                <section className="form-section">
                    <div className="contact-text">
                        <h1>Get in Touch!</h1>
                        <h6> I'm currently not looking for new opportunities, but happily answers all types of inquiries</h6>
                    </div>
                    <div className="form-wrapper">
                        <form className="contact-form">
                            <input/>
                            <input/>
                            <textarea/>
                        </form>
                    </div>
                </section>
            </StyledMain>
        </Layout>
    )
}
