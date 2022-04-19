import React, { useEffect, useState } from "react"
import Menu from "../../components/Menu"
import TraitsWindow from "./windows/TraitsWindow"
import StartupPage from "./StartupPage/StartupPage.tsx"
import ProjectsWindow from "./windows/ProjectsWindow.tsx"
import SocialMediaWindow from "./windows/SocialMediaWindow.tsx"
import ErrorWindow from "./windows/ErrorWindow.tsx"
import Parallax from "../../components/Parallax"
import {
  useTransform,
  useViewportScroll
} from "framer-motion"
import FileTransfer from "../../components/FileTransfer"

const HomeScreen = () => {
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

  return (
    <div className="backgroundVintage relative bg-cyan-700">
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
