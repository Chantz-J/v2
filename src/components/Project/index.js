import React from  'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image" 
import mediaQueries from '../../styles/breakpoints'


const ProjectContainer = styled.div`
max-width: 1200px;
    margin: 50px auto;

    .project {
        
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(6, 1fr);
        align-items: center;
      }
      @media screen and (max-width: 768px) {
        .project {
          align-items: flex-start;
        }
      }

    .project-content {
        position: relative;
        grid-column: 1/7;
        grid-row: 1/-1;
        z-index: 2;
      }
      @media (max-width: 600px) {
        .project-content {
          grid-column: 1/-1;
          padding: 40px;
        }

        
    }

    .project-content .project-label {
        color: ${props => props.theme.colors.lightBlue};
        font-family: ${props => props.theme.fonts.body};
      }
      .project-content .project-title {
        font-family: ${props => props.theme.fonts.head};
        font-size: 2rem;
        margin: 10px 0 30px;
        color: #eee;
      }
      .project-content .project-details {
        font-size: 15px;
        line-height: 1.5;
        color: #aaa;
      }

    .project-content .project-details ul li {
        list-style: none;
    }

      .project-content .project-details p {
        background: ${props => props.theme.colors.blue[0]};
        color: ${props => props.theme.colors.grey};
        font-family: ${props => props.theme.fonts.head};
        box-shadow: 0 0.125rem 0.375rem 0 rgba(0, 0, 0, 0.12);
        padding: 20px 25px;
      }

      @media (max-width: 600px) {
        .project-content .project-details p {
          background-color: transparent;
          padding: 20px 0;
        }
      }
      .project-content .project-details ul {
        display: flex;
        margin-top: 20px;
      }
      .project-content .project-details ul li {
        margin-right: 20px;
        color: #aaa;
        font-family: monospace;
      }
      
      .project-img {
        height: 50vh;
        position: relative;
        z-index: 1;
        
        
        border-radius: 2px;
        grid-column: 6/-1;
        grid-row: 1/-1;
        

        &:hover {
          background-image: none;
        }
      }
      @media screen and (max-width: 768px) {
        .project-img {
          height: 100%;
        }
      }
      @media (max-width: 600px) {
        .project-img {
          grid-column: 1/-1;
          opacity: 0.25;
        }
      }
      .project-img:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        
        mix-blend-mode: screen;
        border-radius: 2px;
      }
      .project-img img {
        border-radius: 2px;
        position: relative;
        mix-blend-mode: multiply;
        
      }
      @media screen and (max-width: 768px) {
        .project-img img {
          object-fit: cover;
          width: auto;
          height: 100%;
        }
      }

`

// background-color: #64ffda;
// background: linear-gradient(0.4turn, #1B2631, #5CD2F7);
// filter: grayscale(100%) contrast(1);

export default function Project({name, type, description, demo, code, img}){
    return (
        <ProjectContainer>
            <div class="project">
                <div class="project-content">
                  <div class="project-label">{name}</div>
                  <h4 class="project-title">{type}</h4>
                  <div class="project-details">
                      <p>{description}</p>
                      <ul>
                          <li>
                            <a href={demo}>Demo</a>
                          </li>
                          <li>
                            <a href={code}>Code</a>
                          </li>
                      </ul>
                  </div>
                </div>
                <div class="project-img">
                     <img src={img} alt="project" />
                </div>
            </div>
        </ProjectContainer>
    )
}