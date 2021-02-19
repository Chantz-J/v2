import React from "react"
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexSection = styled.section`
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas: 
  ". index index index index index index index index index index index index index ."
  ". index index index index index index index index index index index index index ."
  ". index index index index index index index index index index index index index ."
  ". index index index index index index index index index index index index index .";
`

const IntroText__box = styled.div`
  grid-area: index;
  width: 60%;
  margin-top: 4rem;
  h1 {
    font-family: Open Sans, sans-serif;
    font-weight: 100;
    font-size: 3.4rem;
  }
`

 const Index = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                description
            }
        }
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
                slug
              }
            }
          }
        }
    }
  `)

  return (
      <Layout>
        <Head title="Home"/>
        <IndexSection>
          <IntroText__box>
            <h1>{data.site.siteMetadata.description}</h1>
            {/* <h2>{data.allMarkdownRemark.edges.map( x => {
              return (
                <Link to={`${x.node.frontmatter.slug}`}>
                  <h2>{x.node.frontmatter.title}</h2>
                  <p>{x.node.frontmatter.date}</p>
                </Link>
              )
            })}</h2> */}
          </IntroText__box>
        </IndexSection>
      </Layout>
  )
}
export default Index

 