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

const projects = [
  {
    title: "title: subscription funnel",
    description: "react, nextjs, tailwindcss",
    percent: 0,
    scope: "Financial services",
    projectImg: "/images/scpi_funnel.png",
    link: "https://epargne.corum.fr/scpi-particuliers/intro"
  },
  {
    title: "title: life insurance funnel",
    description: "react, nextjs, tailwindcss",
    percent: 25,
    scope: "Financial services",
    projectImg: "/images/life_funnel.png",
    link: "https://epargne.corum.fr/assurance-vie-partenaires/partenaire"
  },
  {
    title: "title: OPSIFY (managment software)",
    description: "description: Antd, React, PWA",
    percent: 50,
    scope: "custom tailored solution",
    projectImg: "/images/logo_opsify.png"
  },
  {
    title: "title: Crypto currency game",
    description: "description: React Material UI",
    percent: 75,
    scope: "fun side project for crypto",
    projectImg: "/images/bribescore.png"
  },
  {
    title: "title: Retake simulator",
    description: "description: Antd, React",
    percent: 100,
    scope: "custom tailored solution",
    projectImg: "/images/altice.png"
  }
  // {
  //   title: "title: Retake simulator",
  //   description: "description: Antd, React",
  //   percent: 60,
  //   projectImg: "/images/altice.png"
  // }
]

const ProjectsWindow = ({ title }) => {
  const [open, setOpen] = useState(true)
  const [position, goNextOrPrev] = useState(0)
  const [openMenu, setOpenMenu] = useState(false)

  const changeProject = (nextOrPrev) => {
    goNextOrPrev(nextOrPrev)
  }

  const toggleFolder = () => {
    setOpen(!open)
  }

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  if (!open)
    return (
      <Icon
        description={title}
        onClick={toggleFolder}
        icon={"/images/folder.png"}
        className="flex flex-col items-center"
        alt="folder"
      />
    )
  return (
    <Window className="projectswindow" shadow={false}>
      <WindowHeader className="flex items-center justify-between">
        <span>{title}</span>
        <Button onClick={toggleFolder} size={"sm"} square>
          <span className="font-bold transform -translate-y-0.5">x</span>
        </Button>
      </WindowHeader>
      <Toolbar>
        <Button variant="menu" size="sm" onClick={toggleMenu}>
          File
        </Button>
        {openMenu && (
          <MenuList
            className="absolute left-0 top-full z-50"
            horizontalAlign="left"
            verticalAlign="bottom"
          >
            <MenuListItem
              as="a"
              // TODO: contribute open source for the elegant way to allow a tag props to be passed
              // @ts-ignore
              href="mailto:ricardo.simoescosta@hotmail.com"
            >
              <Image width={34} height={34} src={"/images/help.png"} />
              <span>Request Info</span>
            </MenuListItem>
          </MenuList>
        )}
        <Button variant="menu" size="sm">
          Edit
        </Button>
        <Button variant="menu" size="sm" disabled>
          Save
        </Button>
      </Toolbar>
      <WindowContent className="flex flex-col text-center justify-center items-center">
        <div style={{ maxWidth: "90%" }}>
          <div className="flex flex-col items-center">
            <Frame variant="field" className="mb-2">
              <Image
                width={350}
                height={150}
                src={projects[position].projectImg}
                alt={projects[position].title}
              />
            </Frame>
            <Frame variant="field" className="mb-2 p-2 bg-white w-full">
              <p className="msFont my-0">{projects[position].title}</p>
              <p className="msFont my-0">{projects[position].description}</p>
              <p className="msFont my-0">{projects[position].scope}</p>
              <p className="msFont my-0">
                link:
                {projects[position].link ? (
                  <a target="_blank" href={projects[position].link}>
                    project link
                  </a>
                ) : (
                  "N/A"
                )}
              </p>
            </Frame>
            <ProgressBar variant="tile" value={projects[position].percent} />
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
