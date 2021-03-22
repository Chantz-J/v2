import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import mediaQueries from '../styles/breakpoints'

import Layout from '../components/layout'
import Head from '../components/head'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const StyledMain = styled.main`
  background: ${props => props.theme.colors.dark};
  margin-left: 160px;
  ${mediaQueries.phablet`
    margin-left: 0;
   `}
`

export const query = graphql`
  query($slug: String!){
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM, Do, YYYY")
      updatedAt (fromNow: true)
      body {
        json
      }
    }
  }
`

export default function Blog(props){
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} style={{width: '65%'}}/>
      }
    }
  }
   
    return (
        <Layout>
          <Head title={props.data.contentfulBlogPost.title} />
          <StyledMain>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            <p>{props.data.contentfulBlogPost.updatedAt}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
          </StyledMain>
        </Layout>
    )
}
