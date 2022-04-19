import React, { useEffect, useState, useRef } from "react"
import { useClippy } from "@react95/clippy"
import Image from "next/image"
import Menu from "../../components/Menu"
import TraitsWindow from "./windows/TraitsWindow"
import StartupPage from "./StartupPage/StartupPage.tsx"
import ProjectsWindow from "./windows/ProjectsWindow.tsx"
import SocialMediaWindow from "./windows/SocialMediaWindow.tsx"
import ErrorWindow from "./windows/ErrorWindow.tsx"
import Parallax from "../../components/Parallax"
import {
  useSpring,
  useTransform,
  useViewportScroll,
  motion
} from "framer-motion"
import FileTransfer from "../../components/FileTransfer"

const HomeScreen = () => {
  const { clippy } = useClippy() || {}

  const [alreadyPresented, setAlreadyPresented] = useState({
    traits: false,
    projects: false,
    social: false
  })
  const [randomParallaxes, setRandomParallaxes] = useState([])
  const [isComplete, setIsComplete] = useState(false)
  const [pageProgress, setPageProgress] = useState(0)
  const { scrollYProgress } = useViewportScroll()
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(() => {
    yRange.onChange((v) => {
      setIsComplete(v >= 100)
      setPageProgress(Math.trunc(v))
    })
  }, [yRange])
/* 
  useEffect(() => {
    if (window && clippy) {
      clippy.play("Wave")
      clippy.speak(
        "Hello there, It's been a while since I've seen you! Let me walk you trough my website :)"
      )
    }
  }, [clippy])

  useEffect(() => {
    if (!clippy) return
    if (pageProgress === 20 && !alreadyPresented.traits) {
      setAlreadyPresented({ ...alreadyPresented, traits: true })
      clippy.stop()
      clippy.speak(
        "Here you can specify the traits of the developer you are looking for!"
      )
    }
    if (pageProgress === 58 && !alreadyPresented.projects) {
      setAlreadyPresented({ ...alreadyPresented, projects: true })
      clippy.stop()
      clippy.speak(
        "Here you can find some of the projects I was/am involved in :)"
      )
    }
    if (pageProgress === 80 && !alreadyPresented.social) {
      setAlreadyPresented({ ...alreadyPresented, social: true })
      clippy.stop()
      clippy.speak("Here you can find all my social media related links!")
    }
  }, [clippy, pageProgress, alreadyPresented]) */

/*   useEffect(() => {
    setRandomParallaxes(generateRandomParallaxes())
  }, [])

  const generateRandomParallaxes = () => {
    let i = 0
    let parallaxes = []
    const parallaxIcons = [
      "error",
      "folderEmpty",
      "exec",
      "execGear",
      "search",
      "trashbin",
      "docs"
    ]
    while (i < 5) {
      i += 1
      const randomOffset = Math.floor(Math.random() * (1500 - 500 + 1) + 500)
      const randomStiffness = Math.floor(Math.random() * (400 - 50 + 1) + 50)
      const randomLeftOffset = Math.floor(Math.random() * (80 - 10 + 1) + 10)
      const randomParallaxIcon =
        parallaxIcons[Math.floor(Math.random() * parallaxIcons.length)]
      parallaxes.push({
        offset: randomOffset,
        stiffness: randomStiffness,
        damping: 50,
        icon: randomParallaxIcon,
        top: randomOffset,
        left: `${randomLeftOffset}%`
      })
    }
    return parallaxes
  } */

  return (
    <div className="backgroundVintage relative bg-cyan-700">
{/*       {randomParallaxes.map((parallax, i) => (
        <Parallax
          key={i}
          className="absolute"
          style={{
            left: parallax.left,
            top: parallax.top
          }}
          spring={{ stiffness: parallax.stiffness, damping: parallax.damping }}
          offset={parallax.offset}
        >
          <Image
            width="100"
            height="100"
            src={`/images/${parallax.icon}.png`}
            alt={parallax.icon}
          />
        </Parallax>
      ))} */}
      <div className="section h-screen pt-20" data-testid="slide1">
        <div className="HomeScreen">
          <StartupPage />
        </div>
        <FileTransfer pageProgress={pageProgress} />
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
        <Parallax offset={100}>
          <div className="HomeScreen">
            <ProjectsWindow title="projects.exe" />
          </div>
        </Parallax>
      </div>
      <div className="section h-screen" data-testid="slide4">
        <Parallax offset={100}>
          <div className="HomeScreen">
            <SocialMediaWindow title="social_media.exe" />
          </div>
        </Parallax>
      </div>
      <div>
        <Menu pageProgress={pageProgress} />
      </div>
    </div>
  )
}

export default HomeScreen
