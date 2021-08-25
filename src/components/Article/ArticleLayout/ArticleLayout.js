import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../../SEO"

const ArticleLayout = ({ children, seo }) => (
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
          seo {
            metaTitle
            metaDescription
            shareImage {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <SEO seo={seo} />
        {/* <ArticleNav /> */}
        <section>{children}</section>
      </>
    )}
  />
)

ArticleLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ArticleLayout
