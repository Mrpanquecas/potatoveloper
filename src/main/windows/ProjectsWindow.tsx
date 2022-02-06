import Image from "next/image"
import React from "react"
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  List,
  ListItem,
  Cutout,
  Progress
} from "react95"
import Icon from "../../commonComponents/Icon"
//import ProgressBar from "../../commonComponents/ProgressBar"

const projects = [
  {
    title: "title: OPSIFY (managment software)",
    description: "description: Antd, React, PWA",
    percent: 20,
    scope: "custom tailored solution",
    projectImg: "/images/logo_opsify.png"
  },
  {
    title: "title: Crypto currency game",
    description: "description: React Material UI",
    percent: 40,
    scope: "fun side project for crypto",
    projectImg: "/images/bribescore.png"
  },
  {
    title: "title: Retake simulator",
    description: "description: Antd, React",
    percent: 60,
    scope: "custom tailored solution",
    projectImg: "/images/altice.png"
  }
]

const listItemStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start"
}

const CustomWindow = ({ title }) => {
  const [open, setOpen] = React.useState(true)
  const [position, goNextOrPrev] = React.useState(0)
  const [openMenu, setOpenMenu] = React.useState(false)

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
      />
    )
  return (
    <Window className="projectswindow" shadow={false}>
      <WindowHeader className="flex items-center justify-between">
        <span>{title}</span>
        <Button onClick={toggleFolder} size={"sm"} square>
          <span style={{ fontWeight: "bold", transform: "translateY(-1px)" }}>
            x
          </span>
        </Button>
      </WindowHeader>
      <Toolbar>
        <Button variant="menu" size="sm" onClick={toggleMenu}>
          File
        </Button>
        {openMenu && (
          <List
            className="absolute left-0 top-full z-50"
            horizontalAlign="left"
            verticalAlign="bottom"
          >
            <ListItem
              style={listItemStyle}
              as="a"
              target="_top"
              href="mailto:ricardo.simoescosta@hotmail.com"
            >
              <img style={{ marginRight: 8 }} src={"/images/help.png"} />{" "}
              Request More Info
            </ListItem>
          </List>
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Cutout style={{ marginBottom: 8 }}>
              <Image
                width={350}
                height={100}
                src={projects[position].projectImg}
              />
            </Cutout>
            <Cutout
              style={{ marginBottom: 8, background: "white", width: "100%" }}
            >
              <p class="msFont">{projects[position].title}</p>
              <p class="msFont">{projects[position].description}</p>
              <p class="msFont">{projects[position].scope}</p>
            </Cutout>
            <Progress value={projects[position].percent} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "100%"
              }}
            >
              <Button
                disabled={position === 0}
                onClick={() => changeProject(position - 1)}
                style={{ marginTop: 8, marginRight: 4 }}
              >
                Previous
              </Button>
              <Button
                disabled={position === projects.length - 1}
                onClick={() => changeProject(position + 1)}
                style={{ marginTop: 8, marginLeft: 4 }}
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

export default CustomWindow
