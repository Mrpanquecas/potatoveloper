import React from "react"
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Progress,
  Cutout,
  Fieldset
} from "react95"
import Icon from "../../../components/Icon"
import SocialLink from "../../../components/SocialLinks"

const projects = [
  {
    title: "title: OPSIFY (managment software)",
    description: "description: Antd, React, PWA",
    percent: 20,
    projectImg: "/images/logo_optsify.png"
  },
  {
    title: "title: Crypto currency game",
    description: "description: React Material UI",
    percent: 40,
    projectImg: "/images/bribescore.png"
  },
  {
    title: "title: Retake simulator",
    description: "description: Antd, React",
    percent: 60,
    projectImg: "/images/altice.png"
  }
]

const socialMedia = [
  {
    src: "/images/git.svg",
    name: "Github",
    url: "https://github.com/Mrpanquecas"
  },
  {
    src: "/images/linkedin.svg",
    name: "Linkedin",
    url: "https://www.linkedin.com/in/costar"
  },
  {
    src: "/images/stackoverflow.svg",
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/8233144/ricardo-costa"
  }
]

const iconStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}

const SocialMediaWindow = ({ title }) => {
  const [open, setOpen] = React.useState(true)
  const [position, goNextOrPrev] = React.useState(0)

  const changeProject = (nextOrPrev) => {
    goNextOrPrev(nextOrPrev)
  }

  const toggleFolder = () => {
    setOpen(!open)
  }

  if (!open)
    return (
      <Icon
        description={title}
        onClick={toggleFolder}
        icon={"/folder.png"}
        styles={iconStyles}
        alt="folder"
      />
    )
  return (
    <Window className="projectswindow" shadow={false}>
      <WindowHeader className="flex items-center justify-between">
        <span id="social">{title}</span>
        <Button onClick={toggleFolder} size={"sm"} square>
          <span style={{ fontWeight: "bold", transform: "translateY(-1px)" }}>
            x
          </span>
        </Button>
      </WindowHeader>
      <Toolbar>
        <Button variant="menu" size="sm">
          File
        </Button>
        <Button variant="menu" size="sm">
          Edit
        </Button>
        <Button variant="menu" size="sm" disabled>
          Save
        </Button>
      </Toolbar>
      <WindowContent
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{ width: "90%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Cutout style={{ padding: 8, background: "white", width: "100%" }}>
              <p className="msFont"></p>
              <Fieldset variant="flat" label="Find me in my social media:">
                {socialMedia.map((social) => (
                  <div key={social.name}>
                    <SocialLink
                      src={social.src}
                      name={social.name}
                      url={social.url}
                    />
                  </div>
                ))}
              </Fieldset>
            </Cutout>
          </div>
        </div>
      </WindowContent>
    </Window>
  )
}

export default SocialMediaWindow
