import React, { useEffect } from "react"
import Menu from "../components/Menu"
import { ProjectsWindow } from "../windows"
import { useClippy } from "@react95/clippy"

const ProjectsScreen = () => {
  const { clippy } = useClippy()

  useEffect(() => {
    if (!clippy) return

    clippy.animate()
    clippy.speak(
      "Take a look at my projects, there's some awesome stuff here!",
      false
    )
  }, [clippy])

  return (
    <>
      <div className="backgroundVintage relative bg-cyan-700">
        <div className="section h-screen">
          <div className="flex justify-center items-center h-full">
            <ProjectsWindow title="projects.exe" />
          </div>
        </div>
        <Menu />
      </div>
    </>
  )
}

export default ProjectsScreen
