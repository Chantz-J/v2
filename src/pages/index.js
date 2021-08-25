import React from "react"
import styled from 'styled-components'

import Layout from '../components/layout'
import Head from '../components/head'
import Hero from '../components/sections/heroSec'
import Projects from '../components/sections/projectSec'
import ArticleComponent from '../components/Article/ArticleComponent'
import ContactSec from '../components/sections/contactSec'




const StyledMain = styled.main`
  background: black;

`


export default function Index (){
  return (
      <Layout>
        <Head title="Home"/>
        <StyledMain>
          <Hero />
          <ArticleComponent />
          <Projects />
          <ContactSec />
        </StyledMain>
      </Layout>
  )
}


 