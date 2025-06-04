import Head from "next/head"
import { GetStaticProps } from "next"
import React from "react"
import HomeScreen from "../screens/HomeScreen"

const HomeScreenPage = () => {
  return (
    <>
      <Head>
        <title>Potatoveloper</title>
      </Head>
      <HomeScreen />
    </>
  )
}

export default HomeScreenPage
