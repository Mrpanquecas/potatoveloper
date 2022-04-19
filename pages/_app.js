import React from "react"
import "../styles/global.css"
import original from "react95/dist/themes/original"
import { createContext } from "react"
import { ThemeProvider } from "styled-components"

const Context = createContext()

const Main = ({Component, pageProps}) => {
  return (
    <Context.Provider>
      <ThemeProvider theme={original}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Context.Provider>
  )
}

export default Main
