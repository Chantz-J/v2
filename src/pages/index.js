import React from "react"
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'


import Layout from '../components/layout'


const IntroText__box = styled.div`
  width: 60%;
  h1 {
    font-weight: 200;
    font-size: 2rem;
  }
`
// const span__Highlight = styled.div`
//   color: purple;
// `

 const Index = () => {
  const data = useStaticQuery(graphql`
  query {
      site {
          siteMetadata {
              description
          }
      }
  }
`)
// console.log(data.site.siteMetadata.description)

const metStyle = x => {
  const toStyleArray = []
  let str = x
  let res = str.split(" ")
  toStyleArray.push(res)
  console.log(toStyleArray)

//  for (let i = 0; i < toStyleArray.length; i++ ){
//    if(toStyleArray[i] === [13] || toStyleArray[i] === [15] || toStyleArray[i] === [16] || toStyleArray[i] === [17]){
//      let y = stoStyleArray[i]
//      y.style.color = white
//    }
//  }
}
metStyle(data.site.siteMetadata.description)

  return (
      <Layout>
        <section className="intro">
          <IntroText__box>
            <h1>{data.site.siteMetadata.description}</h1>
          </IntroText__box>
        </section>
      </Layout>
  )
}
export default Index

 