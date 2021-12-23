import * as React from "react"
import { Link, PageProps } from "gatsby"
import Layout from "../layout/Layout"
import NotFound from "../components/NotFound/NotFound"

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <title>Not found</title>
      <NotFound/>
    </Layout>
  )
}

export default NotFoundPage
