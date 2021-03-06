import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const Contact = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h2>Contact</h2>
            <p><Link to="/">Go back home.</Link></p>
        </Layout>
    )
}
export default Contact