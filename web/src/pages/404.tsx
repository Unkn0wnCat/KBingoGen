import * as React from "react"
import { Link, PageProps } from "gatsby"
import Layout from "../layout/Layout"
import NotFound from "../components/NotFound/NotFound"
import SEO from "../components/Seo/Seo"

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Page Not Found" />
      <NotFound/>
    </Layout>
  )
}

export default NotFoundPage
