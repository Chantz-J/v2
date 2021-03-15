import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'

const ProjectContainer = styled.section`  
  background: ${props => props.theme.colors.dark};
  padding: 6rem 7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .project {
    display: flex;
    justify-content: space-between;
    
    
    .project-info {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-right: 5rem;

      h4 {
        color ${props => props.theme.colors.secondary};
        font-family: ${props => props.theme.fonts.head};
        font-size: 1.6rem;
      }
      h5 {
        color ${props => props.theme.colors.secondary};
        font-family: ${props => props.theme.fonts.head};
        font-weight: 300;
      }
    }

    
      
      
    
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
                summary
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
                     <div className="project">
                        <div className="project-info">
                            <h5>{project.node.frontmatter.title}</h5>
                            <h4>{project.node.frontmatter.summary}</h4>
                            <h5>{project.node.frontmatter.date}</h5>
                        </div>
          
                        <Link to={project.node.frontmatter.slug}>
                              <div className='image-container'>
                                  <img src={project.node.frontmatter.preview.publicURL} style={{width: '100%'}} />
                              </div>
                        </Link>
                      </div>
                   )
               })
           }
        </ProjectContainer>
    )
}
