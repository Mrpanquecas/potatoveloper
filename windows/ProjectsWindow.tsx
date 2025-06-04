import React, { useState } from "react"
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Frame,
  ProgressBar,
  Anchor
} from "react95"
import { useClippy } from "@react95/clippy"
import { projects } from "../utils/contants"

const ProjectsWindow = ({ title }: { title: string }) => {
  const { clippy } = useClippy()
  const [position, goNextOrPrev] = useState<number>(0)
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const changeProject = (nextOrPrev: number) => {
    goNextOrPrev(nextOrPrev)
    clippy?.stop()
    clippy?.stopCurrent()
    clippy?.speak(
      `You are now looking at ${projects[nextOrPrev].title}, ${projects[nextOrPrev].reaction}`,
      true
    )
  }

  const closeProjectsWindow = () => {
    clippy?.stop()
    clippy?.stopCurrent()
    clippy?.speak(
      "Why would you try to close my projects window? That's rude!",
      true
    )
  }

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <Window
      className="w-full mx-2 sm:w-96 sm:mx-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
      shadow={true}
    >
      <WindowHeader className="flex items-center justify-between">
        <span>{title}</span>
        <Button onClick={closeProjectsWindow} size={"sm"} square>
          <span className="font-bold transform -translate-y-0.5">x</span>
        </Button>
      </WindowHeader>
      <Toolbar>
        <Button disabled variant="menu" size="sm" onClick={toggleMenu}>
          File
        </Button>
        <Button disabled variant="menu" size="sm">
          Edit
        </Button>
        <Button disabled variant="menu" size="sm">
          Save
        </Button>
      </Toolbar>
      <WindowContent className="flex flex-col text-center justify-center items-center">
        <div className="w-full">
          <div className="flex flex-col items-center">
            <Frame variant="field" className="mb-2 p-2 bg-white w-full">
              <p className="text-left my-1">
                Project: {projects[position].title}
              </p>
              <p className="text-left my-1">{projects[position].description}</p>
              <p className="text-left my-1 flex gap-1">
                Link:
                {projects[position].link && (
                  <Anchor href={projects[position].link} target="_blank">
                    {projects[position].link}
                  </Anchor>
                )}
              </p>
            </Frame>
            <ProgressBar
              variant="tile"
              value={(position / projects.length) * 100}
            />
            <div className="flex flex-row items-center justify-end w-full">
              <Button
                disabled={position === 0}
                onClick={() => changeProject(position - 1)}
                className="mt-2 mr-2"
              >
                Previous
              </Button>
              <Button
                disabled={position === projects.length - 1}
                onClick={() => changeProject(position + 1)}
                className="mt-2 ml-2"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </WindowContent>
    </Window>
  )
}

export default ProjectsWindow
