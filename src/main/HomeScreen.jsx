import React from "react"
import { motion, useTransform, Variants } from "framer-motion"

import Menu from "../commonComponents/Menu"
import TraitsWindow from "./windows/TraitsWindow"
import StartupPage from "./StartupPage/StartupPage"
import ProjectsWindow from "./windows/ProjectsWindow"
import SocialMediaWindow from "./windows/SocialMediaWindow"
import ErrorWindow from "./windows/ErrorWindow.tsx"
import Parallax from "../../components/Parallax"

const HomeScreen = () => {
  return (
    <div className="backgroundVintage h-full bg-cyan-700">
      <div className="section h-screen pt-20" key="slide1">
        <div className="HomeScreen">
          <StartupPage />
        </div>
      </div>
      <div className="section h-screen" key="slide2">
        <Parallax spring={{stiffness: 150, damping: 50}} offset={250}>
          <ErrorWindow error="Perfect developer does not exist" />
        </Parallax>
          <div className="HomeScreen">
            <TraitsWindow title="developer.exe" />
          </div>
      </div>
      <div className="section h-screen" key="slide3">
        <Parallax offset={100}>
          <div className="HomeScreen">
            <ProjectsWindow title="projects.exe" />
          </div>
        </Parallax>
      </div>
      <div className="section h-screen" key="slide4">
        <Parallax offset={100}>
          <div className="HomeScreen">
            <SocialMediaWindow title="social_media.exe" />
          </div>
        </Parallax>
      </div>

      <div>
        <Menu />
      </div>
    </div>
  )
}

export default HomeScreen
