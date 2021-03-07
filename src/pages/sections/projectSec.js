import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'

export default function Projects(){
    const data = useStaticQuery(graphql`
    query {
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
        <section className="project-container">
           {
               data.allMarkdownRemark.edges.map(project => {
                   return(
                       <Link to={project.node.frontmatter.slug}>
                            <h4>{project.node.frontmatter.title}</h4>
                            <h4>{project.node.frontmatter.date}</h4>
                            <br></br>
                       </Link>
                       
                   )
               })
           }
        </section>
    )
}