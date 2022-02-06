import React, { useEffect, useState, useRef } from "react"
import { useClippy } from '@react95/clippy';

import Menu from "../commonComponents/Menu"
import TraitsWindow from "./windows/TraitsWindow"
import StartupPage from "./StartupPage/StartupPage.tsx"
import ProjectsWindow from "./windows/ProjectsWindow.tsx"
import SocialMediaWindow from "./windows/SocialMediaWindow.tsx"
import ErrorWindow from "./windows/ErrorWindow.tsx"
import Parallax from "../../components/Parallax"
import { useTransform, useViewportScroll } from "framer-motion"

const HomeScreen = () => {
  const { clippy } = useClippy();

  const [isComplete, setIsComplete] = useState(false)
  const [pageProgress, setPageProgress] = useState(0)
  const { scrollYProgress } = useViewportScroll()
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(
    () =>{
      yRange.onChange((v) => {
        setIsComplete(v >= 100)
        setPageProgress(Math.trunc(v))
      })},
    [yRange]
  )

  useEffect(() => {
    if(clippy) {
      clippy.play('Wave')
    }
  }, [clippy])

  return (
    <div className=" relative bg-cyan-700 snap-y snap-mandatory">
      <div className="section h-screen pt-20 snap-center" key="slide1">
        <div className="HomeScreen">
          <StartupPage />
        </div>
      </div>
      <button onClick={() =>clippy.play('Wave') } />
      <div className="section h-screen snap-center" key="slide2">
        <div className="HomeScreen">
          <TraitsWindow title="developer.exe" />
          <Parallax
            className="flex justify-center z-0"
            spring={{ stiffness: 350, damping: 50 }}
            offset={-100}
          >
            <ErrorWindow title="error.exe" error="Be careful, what you are looking for might not exist" />
          </Parallax>
        </div>
      </div>
      <div className="section h-screen snap-center" key="slide3">
        <Parallax offset={100}>
          <div className="HomeScreen">
            <ProjectsWindow title="projects.exe" />
          </div>
        </Parallax>
      </div>
      <div className="section h-screen snap-center" key="slide4">
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
