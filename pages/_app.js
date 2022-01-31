import React from "react"
import "../styles/global.css"
import "../src/main/styles/HomeScreen.css"
import HomeScreen from "../src/main/HomeScreen"
import original from "react95/dist/themes/original"

import { ThemeProvider } from "styled-components"

const Main = () => {
  return (
    <ThemeProvider theme={original}>
      <HomeScreen />
    </ThemeProvider>
  )
}

export default Main
