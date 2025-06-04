import React, { useEffect, useState } from "react"
import Menu from "../components/Menu"
import { Monitor } from "react95"
import Image from "next/image"
import { useClippy } from "@react95/clippy"
import { Button } from "react95"
import { ProjectsWindow } from "../windows"

const HomeScreen = () => {
  const { clippy } = useClippy()
  const [openProjectsWindow, setOpenProjectsWindow] = useState<boolean>(false)

  useEffect(() => {
    console.log(clippy)
    if (!clippy) return

    clippy.animate()
    clippy.speak(
      "Hey! Remember me? I'm here to increase this website's bundle size!",
      false
    )
    console.log(clippy.animations())
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
                console.log("clicked")
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
                setOpenProjectsWindow(true)
                clippy?.stop()
                clippy?.speak(
                  "I'm glad you want to know more about me! Please feel free to check my projects",
                  false
                )
              }}
            >
              Learn more about me
            </Button>
          </div>
        </div>
        {openProjectsWindow && <ProjectsWindow title="projects.exe" />}
        <div>
          <Menu />
        </div>
      </div>
    </>
  )
}

export default HomeScreen
