import React from 'react'
import styled from 'styled-components'
import mediaQueries from '../../styles/breakpoints'
import { Link, graphql, useStaticQuery } from 'gatsby'

const ProjectContainer = styled.section`  
  background: ${props => props.theme.colors.dark};
  padding: 6rem 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h2 {
    text-transform: uppercase;
    letter-spacing: .4rem;
    font-size: .6rem;
    margin: 2rem 0;
    align-self: flex-start;
    color: ${props => props.theme.colors.secondary};
    font-family: ${props => props.theme.fonts.head};
    font-size: 1.7rem;
    padding-bottom: 5px;
    position: relative;
    
    ::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background: ${props => props.theme.colors.slighty_dark};
        transform-origin: bottom right;
        transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    }

    &:hover {
      ::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }

  }

  ${mediaQueries.desktop_medium`
      padding: 6rem 5rem;
   `}
   ${mediaQueries.desktop`
      flex-direction: column;
      padding: 6rem 3rem;
   `}
   ${mediaQueries.tablet`
      padding: 6rem 1rem;
    `}
    ${mediaQueries.phablet`
      padding: 6rem 0;
    `}
  .project {
    width: 100%;
    overflow: hidden;

      img {
        height: 100%;
        transition: transform .5s ease;

        &:hover {
          transform: scale(1.2);
          filter: blur(2px);
        }
      }
    
      

 
  }

.filter {
  width: 90%;

  &:hover {
    filter:
  }
}

`


export default function Projects(){
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              id
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
          <h2> Featured Project</h2>
          <article>
           {
               data.allMarkdownRemark.edges.map(project => {
                   return(
                    <Link key={project.node.id} 
                    to={`${project.node.frontmatter.slug}`}
                    >
                      <div className="filter">
                          <div className="project">
                            <img src={project.node.frontmatter.preview.publicURL} width="100%"/>
                            <div className="project-info"></div>
                          </div>
                      </div>
                    </Link>
                   )
               })
           }
           </article>
        </ProjectContainer>
    )
}
