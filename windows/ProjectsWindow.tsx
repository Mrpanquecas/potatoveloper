import Image from "next/image"
import React, { useState } from "react"
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Frame,
  ProgressBar,
  MenuList,
  MenuListItem
} from "react95"
import Icon from "../components/Icon"
import { useClippy } from "@react95/clippy"

type Projects = {
  title: string
  description: string
  scope: string
  link?: string
  reaction: string
}

const projects: Projects[] = [
  {
    title: "Tometrics",
    description:
      "Tometrics is a garden planner with a focus on data collection and analysis",
    scope: "Garden planning",
    link: "https://tometrics.com",
    reaction:
      "I love working on projects with direct impact on my life (Tometrics, get it? because tomato + metrics...."
  },
  {
    title: "AUTODOC",
    description:
      "AUTODOC is a french company that provides a platform to manage their fleet of vehicles, for them I worked on different subscription funnels ",
    scope: "Financial services",
    link: "https://autodoc.de",
    reaction: "one of my biggest projects to date"
  },
  {
    title: "CORUM L'Epargne subscription funnels",
    description:
      "CORUM is a french company that provides financial services, for them I worked on different subscription funnels ",
    scope: "Financial services",
    link: "https://corumlepargne.fr",
    reaction: "proud to work on this, a lot of money raised from investors"
  },
  {
    title: "OPSIFY (managment software)",
    description: "description: Antd, React, PWA",
    scope: "custom tailored solution",
    reaction: "it was a blast working on this one"
  },
  {
    title: "Retake simulator",
    description: "description: Antd, React",
    scope: "custom tailored solution",
    reaction:
      "always good to help people get the best value for their used phones"
  },
  {
    title: "Crypto currency game",
    description: "description: React Material UI",
    scope: "fun side project for crypto",
    reaction: "just a fun little side project"
  }
]

const ProjectsWindow = ({ title }) => {
  const { clippy } = useClippy()
  const [open, setOpen] = useState(true)
  const [position, goNextOrPrev] = useState(0)
  const [openMenu, setOpenMenu] = useState(false)

  const changeProject = (nextOrPrev: number) => {
    goNextOrPrev(nextOrPrev)
    clippy?.stopCurrent()
    clippy?.speak(
      `You are now looking at ${projects[nextOrPrev].title}, ${projects[nextOrPrev].reaction}`,
      false
    )
  }

  const toggleFolder = () => {
    setOpen(!open)
  }

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <Window className="projectswindow" shadow={false}>
      <WindowHeader className="flex items-center justify-between">
        <span>{title}</span>
        <Button disabled onClick={toggleFolder} size={"sm"} square>
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
            <Frame variant="field" className="mb-2"></Frame>
            <Frame variant="field" className="mb-2 p-2 bg-white w-full">
              <p className="msFont my-0">{projects[position].title}</p>
              <p className="msFont my-0">{projects[position].description}</p>
              <p className="msFont my-0 underline link">
                <a href={projects[position].link}>
                  Link: {projects[position].link}
                </a>
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
