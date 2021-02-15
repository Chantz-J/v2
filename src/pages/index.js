import React from "react"
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'


import Layout from '../components/layout'
import Head from '../components/head'

const IntroText__box = styled.div`
  width: 60%;
  h1 {
    font-family: Open Sans, sans-serif;
    font-weight: 100;
    font-size: 2rem;
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
        <section className="intro">
          <IntroText__box>
            <h1>{data.site.siteMetadata.description}</h1>
            <h2>{data.allMarkdownRemark.edges.map( x => {
              return (
                <Link to={`${x.node.frontmatter.slug}`}>
                  <h2>{x.node.frontmatter.title}</h2>
                  <p>{x.node.frontmatter.date}</p>
                </Link>
              )
            })}</h2>
          </IntroText__box>
        </section>
      </Layout>
  )
}
export default Index

 