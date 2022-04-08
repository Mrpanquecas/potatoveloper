import React from "react"
import "../styles/global.css"
import original from "react95/dist/themes/original"
import { createContext } from "react"
import { ThemeProvider } from "styled-components"
import { ClippyProvider } from "@react95/clippy"

const Context = createContext()

const Main = ({Component, pageProps}) => {
  return (
    <Context.Provider>
      <ThemeProvider theme={original}>
        <ClippyProvider>
          <Component {...pageProps} />
        </ClippyProvider>
      </ThemeProvider>
    </Context.Provider>
  )
}

export default Main
