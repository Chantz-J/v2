import React from 'react'
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons } from './FooterElements'
import { graphql, useStaticQuery } from 'gatsby'
import Github from '../icons/github'
import LinkedIn from '../icons/linkedIn'



export default function Footer(){
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    end
                    email
                    github
                    linkedIn
                }
            }
        }
    `)
    let today = new Date()
    let year = today.getFullYear()
    return (
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a href={data.site.siteMetadata.github} target="_blank" rel="noopener noreferrer">
                        <Github />
                    </a>
                    <a href={data.site.siteMetadata.linkedIn} target="_blank" rel="noopener noreferrer">
                        <LinkedIn />
                    </a>
                </FooterSocialIcons>
                <p>&copy; {year} Made by {data.site.siteMetadata.author}.</p>
            </FooterSocialWrapper>
        </FooterWrapper>

    )
}
