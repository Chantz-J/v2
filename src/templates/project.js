import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import mediaQueries from '../styles/breakpoints'

import Layout from '../components/layout'
import Head from '../components/head'

const StyledMain = styled.main`
  background: ${props => props.theme.colors.dark};
  margin-left: 160px;
  ${mediaQueries.phablet`
    margin-left: 0;
   `}
   .project-container {
       color: ${props => props.theme.colors.primary};

       .project {

            a {
                color: ${props => props.theme.colors.secondary};
                text-decoration: none;
                padding-left: 25%;
                font-family: ${props => props.theme.fonts.head};
                padding-bottom: 5px;
                position: relative;

            }

            h2 {
                font-size: 2.8rem;
                padding-left: 25%;
                font-family: ${props => props.theme.fonts.head};
            }
            .date {
                font-family: ${props => props.theme.fonts.body};
                margin: .7rem 0;
                padding-left: 25%;
                padding-bottom: 50px;
            }
            
            .content {
                
                font-family: ${props => props.theme.fonts.body};
            }

            .proj-text {
                padding-left: 25%;
                padding-bottom: 50px;
            }
            
       }

       .content {
           padding: 1rem 2%;
       }
   }
`

export default function Project () {
    return (
        <StaticQuery 
        query={graphql`
        query{
            markdownRemark {
              html
              id
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
              }
            }
          }
        `}
        render={data => (
        <Layout>
            <Head title={data.markdownRemark.frontmatter.title}/>
            <StyledMain>
                <section className="project-container">
                    <div className="project">
                        <h2>{data.markdownRemark.frontmatter.title}</h2>
                        <p className="date">{data.markdownRemark.frontmatter.date}</p>
                        <a href="https://github.com/TT-33-Water-My-Plants" target="_blank" rel="noreferrer">Source Code</a>
                        <br></br>
                        <a href="https://water-my-plants-tt-33.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>
                        <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}
                        />
                    </div>
                </section>
            </StyledMain>
        </Layout> 
            )}
        />
    )

}
        