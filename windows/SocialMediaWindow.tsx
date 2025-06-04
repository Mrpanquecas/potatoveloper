import React, { useEffect } from "react"
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Frame,
  GroupBox
} from "react95"
import SocialLink from "../components/SocialLinks"
import { useClippy } from "@react95/clippy"

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

type SocialMediaWindowProps = {
  onClose: () => void
}

const SocialMediaWindow = ({ onClose }: SocialMediaWindowProps) => {
  const { clippy } = useClippy()

  const handleClose = () => {
    onClose()
  }

  useEffect(() => {
    if (!clippy) return

    clippy.animate()
    clippy.speak(
      "Please feel free to reach out to me on my social media",
      false
    )
  }, [clippy])

  return (
    <Window
      className="w-full mx-2 sm:w-96 sm:mx-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
      shadow={true}
    >
      <WindowHeader className="flex items-center justify-between">
        <span>social_media.exe</span>
        <Button onClick={handleClose} size={"sm"} square>
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
