import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

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
            <section className="project-container">
                <div className="project" key={data.markdownRemark.frontmatter.slug}>
                    <h2>{data.markdownRemark.frontmatter.title}</h2>
                    <p>{data.markdownRemark.frontmatter.date}</p>
                    <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}
                    />
                </div>
            </section>
        </Layout> 
            )}
        />
    )
}
        