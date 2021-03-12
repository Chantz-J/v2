import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'

const ProjectContainer = styled.section`  
  padding: 2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const StyledLink = styled(Link)`
  .image-container {
    width: 70rem;
    
  }
`

export default function Projects(){
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              html
              frontmatter {
                title 
                date
                slug
                preview {
                    publicURL
                }
              }
            }
          }
        }
      }
    `)
    return (
        <ProjectContainer>
           {
               data.allMarkdownRemark.edges.map(project => {
                   return(
                       <StyledLink to={project.node.frontmatter.slug}>
                            <div className='image-container'>
                                <img src={project.node.frontmatter.preview.publicURL} style={{width: '100%'}} />
                            </div>
                            <h4>{project.node.frontmatter.title}</h4>
                            <h4>{project.node.frontmatter.date}</h4>
                            <br></br>
                       </StyledLink>
                       
                   )
               })
           }
        </ProjectContainer>
    )
}
