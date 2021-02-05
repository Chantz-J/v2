import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <h1>Page not found</h1>
            <Link to='/'><p>Go Home</p></Link>
        </Layout>
    )
}
export default NotFound