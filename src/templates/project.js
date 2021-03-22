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
   }
`

export default function Project () {
    return (
        <StaticQuery 
        query={graphql`
        query{
            markdownRemark {
              html
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
        