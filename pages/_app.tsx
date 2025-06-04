import React from "react"
import "../styles/global.css"
import original from "react95/dist/themes/original"
import { ThemeProvider } from "styled-components"
import { AGENTS, ClippyProvider } from "@react95/clippy"

const Main = ({ Component, pageProps }) => {
  return (
    <ClippyProvider agentName={AGENTS.CLIPPY}>
      <ThemeProvider theme={original}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ClippyProvider>
  )
}

export default Main
