import React, { useEffect } from "react"
import Menu from "../components/Menu"
import {
  TraitsWindow,
  ProjectsWindow,
  SocialMediaWindow,
  ErrorWindow
} from "../windows"
import Parallax from "../components/Parallax"
import { Monitor } from "react95"
import Image from "next/image"
import { useClippy } from "@react95/clippy"

const HomeScreen = () => {
  const { clippy } = useClippy()

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
      <div className="backgroundVintage relative bg-cyan-700">
        <div className="section h-screen pt-20" data-testid="slide1">
          <div className="HomeScreen">
            <div
              data-testid="ceo"
              className="newCEO"
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
          </div>
        </div>
        <div className="section h-screen" data-testid="slide2">
          <div className="HomeScreen">
            <TraitsWindow title="developer.exe" />
            <Parallax
              className="flex justify-center z-0"
              spring={{ stiffness: 350, damping: 50 }}
              offset={-100}
            >
              <ErrorWindow
                title="error.exe"
                error="Be careful, what you are looking for might not exist"
              />
            </Parallax>
          </div>
        </div>
        <div className="section h-screen" data-testid="slide3">
          <span id="projects" className="pt-40 -mt-40" />
          <Parallax>
            <div className="HomeScreen">
              <ProjectsWindow title="projects.exe" />
            </div>
          </Parallax>
        </div>
        <div className="section h-screen" data-testid="slide4">
          <span id="social" className="pt-40 -mt-40" />
          <Parallax>
            <div className="HomeScreen">
              <SocialMediaWindow title="social_media.exe" />
            </div>
          </Parallax>
        </div>
        <div>
          <Menu />
        </div>
      </div>
    </>
  )
}

export default HomeScreen
