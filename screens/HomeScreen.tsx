import React, { useEffect, useState } from "react"
import Menu from "../components/Menu"
import { Monitor } from "react95"
import Image from "next/image"
import { useClippy } from "@react95/clippy"
import { Button } from "react95"
import { ProjectsWindow, SocialMediaWindow } from "../windows"
import MainWindow from "../components/MainWindow"
import { detectConsoleOpen, showConsoleArt } from "../utils/consoleArt"

const HomeScreen = () => {
  const { clippy } = useClippy()
  const [openProjectsWindow, setOpenProjectsWindow] = useState<boolean>(false)
  const [openSocialMediaWindow, setOpenSocialMediaWindow] =
    useState<boolean>(false)
  const [openMainWindow, setOpenMainWindow] = useState<boolean>(false)

  const closeProjectsWindow = () => {
    setOpenProjectsWindow(false)
  }

  const closeSocialMediaWindow = () => {
    setOpenSocialMediaWindow(false)
  }

  const handleOpenWindow = (windowName: string) => {
    switch (windowName) {
      case "projects":
        setOpenProjectsWindow(true)
        break
      case "social":
        setOpenSocialMediaWindow(true)
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (!clippy) return

    clippy.animate()
    clippy.speak(
      "Hey! Remember me? I'm here to increase this website's bundle size!",
      false
    )
    detectConsoleOpen(() => {
      showConsoleArt()
    })
  }, [clippy])

  return (
    <>
      <div className="backgroundVintage h-full relative bg-cyan-700">
        <div className="section h-full">
          <div className="flex flex-col items-center justify-center">
            <div
              data-testid="ceo"
              className="newCEO mt-20"
              onClick={() => {
                clippy?.stop()
                clippy?.speak(
                  "Hey! Remember me? I'm here to increase this website's bundle size!",
                  false
                )
              }}
            >
              <Monitor backgroundStyles={{ background: "blue" }}>
                <Image layout="fill" src={"/images/newCEO.jpg"} alt="CEO" />
              </Monitor>
            </div>
            <span className="expertText">EXPERT IN</span>
            <span className="shakeText expertText">CUTTING&nbsp;EDGE</span>
            <span className="expertText">TECHNOLOGIES</span>
            <span className="expertText">↓</span>
            <Button
              className="mt-5"
              size="lg"
              onClick={() => {
                setOpenMainWindow(true)
                clippy?.stop()
                clippy?.speak(
                  "Opening my computer. Feel free to explore my projects and social media!",
                  false
                )
              }}
            >
              Learn more about me!
            </Button>
          </div>
        </div>

        {openMainWindow && (
          <MainWindow
            onOpenWindow={handleOpenWindow}
            onClose={() => setOpenMainWindow(false)}
          />
        )}
        {openProjectsWindow && <ProjectsWindow onClose={closeProjectsWindow} />}
        {openSocialMediaWindow && (
          <SocialMediaWindow onClose={closeSocialMediaWindow} />
        )}
        <div>
          <Menu />
        </div>
      </div>
    </>
  )
}

export default HomeScreen
