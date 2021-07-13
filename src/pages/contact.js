import React, { useState } from 'react'
import styled from 'styled-components'
import mediaQueries from '../styles/breakpoints'
import { useForm, ValidationError } from '@formspree/react'

import Layout from '../components/layout'
import Head from '../components/head'

const StyledMain = styled.main`
  margin-left: 160px;
  padding: 0 1rem;
  ${mediaQueries.phablet`
    margin-left: 0;
   `}
   

   .form-section {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: ${props => props.theme.colors.blue[1]};
        ${mediaQueries.desktop`
            flex-direction: column;
        `}

    .contact-text {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        
        
        h1 {
            color: ${props => props.theme.colors.secondary};
            font-family: ${props => props.theme.fonts.head};
            font-size: 3rem;
            margin: 2rem 0;
        }
        h6 {
            color: ${props => props.theme.colors.secondary};
            font-family: ${props => props.theme.fonts.head};
            font-size: 1rem;
        }
    }

    .form-wrapper {
        margin: 0 0 2rem 0;
        width: 100%;
        height: 70vh;
        
        
        
        .contact-form {
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-item: center;
            justify-content: space-between;
            box-shadow: 0 0.125rem 0.375rem 0 rgba(0, 0, 0, 0.6);
            max-height: 700px;

            input {
                border-top-style: hidden;
                border-right-style: hidden;
                border-left-style: hidden;
                border-bottom: 1px solid #e5e5e5;
                height: 50px;
                margin: 2rem 0;
                font-size: 1.2rem;
                outline: none;
                background-color: ${props => props.theme.colors.blue[1]};
                color: ${props => props.theme.colors.secondary};
                font-family: ${props => props.theme.fonts.head};
            }

            textarea {
                border-top-style: hidden;
                border-right-style: hidden;
                border-left-style: hidden;
                outline: none;
                margin: 2rem 0;
                width: 100%;
                max-width: 100%;
                min-height: 50px;
                max-height: 600px;
                resize: vertical;
                font-size: 1.2rem;
                font-family: ${props => props.theme.fonts.head};
                background-color: ${props => props.theme.colors.blue[1]};
                color: ${props => props.theme.colors.secondary};
                border-bottom: 1px solid #e5e5e5;
                
            }

            button {
                margin: 2rem 0;
                width: 200px;
                padding: .8rem;
                align-self: center;
                text-transform: uppercase;
                font-family: ${props => props.theme.fonts.head};
                background-color: ${props => props.theme.colors.blue[1]};
                color: ${props => props.theme.colors.secondary};
                box-shadow: 0 0.125rem 0.375rem 0 rgba(0, 0, 0, 0.6);
                border: none;
                cursor: pointer;
            }


        }
    }

 }


`

export default function Contact(){
    const [form, setForm] = useState({name: '', email: '', message: ''})
    const [state, handleSubmit] = useForm("mleaegll");

    const handleChange = e => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    return ( 
        <Layout>
            <Head title="Contact"/>
            <StyledMain>
                <section className="form-section">
                    <div className="contact-text">
                        <h1>Get in Touch!</h1>
                        <h6> I'm currently open to new opportunities, and happily answer all types of inquiries.</h6>
                    </div>
                    <div className="form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input 
                                placeholder="Your name" 
                                name="name"
                                type="name"
                                id="name"
                                value={form.name} 
                                onChange={handleChange} />
                            <input 
                                placeholder="Your email" 
                                name="email"
                                type="email"
                                id='email'
                                value={form.email} 
                                onChange={handleChange}/>
                            <textarea 
                                placeholder="Say something nice..." 
                                id="message" 
                                name="message"
                                value={form.message} 
                                onChange={handleChange}/>
                            <button type="submit" disabled={state.submitting}>
                                {state.succeeded ? 'Message sent. Thanks!' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </section>
            </StyledMain>
        </Layout>
    )
}
