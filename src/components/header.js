import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'


const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    menuLinks {
                        name
                        link
                      }
                }
            }
        }
    `)
    return (
        <header>
            <nav>
                <h2><Link to='/'>{data.site.siteMetadata.title}</Link></h2>
                <ul>
                    {
                        data.site.siteMetadata.menuLinks.map(link => {
                            return (
                                <li key={link.name}>
                                     <Link to={link.link}>{link.name}</Link>
                                </li>
                            )
                        })
                    }

                </ul>
            </nav>
        </header>
    )
}
export default Header