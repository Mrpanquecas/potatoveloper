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
              <ListItem>
               <a className="flex justify-between items-center w-full text-black no-underline" href="#projects">
                  <Image
                    width={34}
                    height={34}
                    src={"/images/help.png"}
                    alt="projects"
                  />
                  Projects
                </a>
              </ListItem>
              <ListItem>
                <a className="flex justify-between items-center w-full text-black no-underline" href="#social">
                  <Image
                    width={34}
                    height={34}
                    src={"/images/help.png"}
                    alt="social_media"
                  />
                  Social Media
                </a>
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
