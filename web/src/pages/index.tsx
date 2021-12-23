import { PageProps, Link } from "gatsby"
import * as React from "react"
import { AppContext } from "../context/AppContext"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Layout from "../layout/Layout";


const IndexPage = (props: PageProps) => {
  return (
    <Layout>
      <h1>KBingoGen</h1>

      <p>
        There will soon be a new, exciting way to play Bingo with custom cards against your friends both online and offline.
      </p>
      <p>Check back soon! You can follow the project over on <a href={"https://github.com/Unkn0wnCat/kbingogen"}>GitHub</a> 😀</p>
    </Layout>
  )
}

export default IndexPage
