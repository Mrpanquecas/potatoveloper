import Head from "next/head"
import React from "react"
import HomeScreen from "../src/main/HomeScreen"

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
