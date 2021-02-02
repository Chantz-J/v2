import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    let today = new Date()
    let year = today.getFullYear()
    return (
        <footer>
            <p>Created by {data.site.siteMetadata.author} | {year}</p>
        </footer>
    )
}
export default Footer