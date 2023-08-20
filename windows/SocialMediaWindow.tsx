import React, { useState } from "react"
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Frame,
  GroupBox
} from "react95"
import Icon from "../components/Icon"
import SocialLink from "../components/SocialLinks"

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

const SocialMediaWindow = ({ title }) => {
  const [open, setOpen] = useState(true)

  const toggleFolder = () => {
    setOpen(!open)
  }

  if (!open)
    return (
      <Icon
        description={title}
        onClick={toggleFolder}
        icon={"/folder.png"}
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
      <WindowContent className="flex flex-col text-center justify-center items-center">
        <div style={{ width: "90%" }}>
          <div className="flex flex-col items-center">
            <Frame variant="field" className="p-2 w-full">
              <p className="msFont"></p>
              <GroupBox variant="flat" label="Find me in my social media:">
                {socialMedia.map((social) => (
                  <div key={social.name}>
                    <SocialLink
                      src={social.src}
                      name={social.name}
                      url={social.url}
                    />
                  </div>
                ))}
              </GroupBox>
            </Frame>
          </div>
        </div>
      </WindowContent>
    </Window>
  )
}

export default SocialMediaWindow
