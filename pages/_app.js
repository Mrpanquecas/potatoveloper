import React from "react"
import "../styles/global.css"
import "../src/main/styles/HomeScreen.css"
import HomeScreen from "../src/main/HomeScreen"
import original from "react95/dist/themes/original"
import { createContext } from "react"
import { ThemeProvider } from "styled-components"
const Context = createContext()

const Main = () => {
  return (
    <Context.Provider>
      <ThemeProvider theme={original}>
        <HomeScreen />
      </ThemeProvider>
    </Context.Provider>
  )
}

export default Main
