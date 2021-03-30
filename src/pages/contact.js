import React, { useState } from 'react'
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
        
        width: 100%;
        height: 100vh;
        display: flex;
        background: ${props => props.theme.colors.dark};

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
        padding: 3rem;
        
        
        .contact-form {
            
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-item: center;
            justify-content: space-between;
            box-shadow: 0 0.125rem 0.375rem 0 rgba(0, 0, 0, 0.6);

            input {
                border-top-style: hidden;
                border-right-style: hidden;
                border-left-style: hidden;

                height: 50px;
                margin: 2rem 0;
                font-size: 1.7rem;
                background: ${props => props.theme.colors.dark};
                color: ${props => props.theme.colors.secondary};
                border-bottom: 1px solid #e5e5e5;
                font-family: ${props => props.theme.fonts.head};
            }

            textarea {
                border-top-style: hidden;
                border-right-style: hidden;
                border-left-style: hidden;
                font-family: ${props => props.theme.fonts.head};
                margin: 2rem 0;
                width: 100%;
                max-width: 100%;
                min-height: 50px;
                resize: vertical;
                font-size: 1.7rem;
                background: ${props => props.theme.colors.dark};
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
                background: ${props => props.theme.colors.dark};
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

    const handleChange = e => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
    }
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
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input 
                            placeholder="Your name" 
                            name="name"
                            value={form.name} 
                            onChange={handleChange} />
                            <input 
                            placeholder="Your email" 
                            name="email"
                            value={form.email} 
                            onChange={handleChange}/>
                            <textarea 
                            placeholder="Say something nice..."  
                            name="message"
                            value={form.message} 
                            onChange={handleChange}/>
                            <button>Send Message</button>
                        </form>
                    </div>
                </section>
            </StyledMain>
        </Layout>
    )
}
