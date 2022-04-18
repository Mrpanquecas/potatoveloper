import Image from "next/image"
import React from "react"
import { List, ListItem, Divider, Button, Toolbar, AppBar } from "react95"
import Clock from "./Clock"

const Menu = ({ pageProgress }) => {
  const [open, setOpen] = React.useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  const getTime = () => {
    return new Date().toLocaleTimeString()
  }

  return (
    <AppBar className="z-10" fixed={true}>
      <Toolbar className="w-full">
        <div className="relative flex items-center w-full justify-between pr-2">
          <Button onClick={toggleMenu} active={open}>
            Start
          </Button>
          {open && (
            <List
              className="absolute left-0 top-full"
              horizontalAlign="left"
              verticalAlign="top"
            >
              <ListItem href="#slide1">
                <Image
                  width={34}
                  height={34}
                  src={"/images/trashbin.png"}
                  alt="about"
                />{" "}
                About
              </ListItem>
              <ListItem href="#slide2">
                <Image
                  width={34}
                  height={34}
                  src={"/images/help.png"}
                  alt="trash"
                />
                Trash
              </ListItem>
              <Divider />
              <ListItem href="#slide3">
                <Image
                  width={34}
                  height={34}
                  src={"/images/help.png"}
                  alt="projects"
                />
                Projects
              </ListItem>
              <ListItem href="#slide4">
                <Image
                  width={34}
                  height={34}
                  src={"/images/help.png"}
                  alt="social_media"
                />
                Social Media
              </ListItem>
            </List>
          )}
          <Clock />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Menu
