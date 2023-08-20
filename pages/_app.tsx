import React from "react"
import "../styles/global.css"
import original from "react95/dist/themes/original"
import { ThemeProvider } from "styled-components"

const Main = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={original}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default Main
