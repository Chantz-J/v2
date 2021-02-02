import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'


const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <header>
            <nav>
                <h2><Link to='/'>{data.site.siteMetadata.title}</Link></h2>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header