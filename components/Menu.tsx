import Image from "next/image"
import React, { useState } from "react"
import { MenuList, MenuListItem, Button, Toolbar, AppBar } from "react95"
import Clock from "./Clock"

const Menu = () => {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <AppBar className="z-10">
      <Toolbar className="w-full">
        <div className="relative flex items-center w-full justify-between pr-2">
          <Button onClick={toggleMenu} active={open}>
            Start
          </Button>
          {open && (
            <MenuList
              className="absolute left-0 top-full"
              horizontalAlign="left"
              verticalAlign="top"
            >
              <MenuListItem
                as="a"
                // TODO: contribute open source for the elegant way to allow a tag props to be passed
                // @ts-ignore
                href="#projects"
              >
                <Image
                  width={34}
                  height={34}
                  src={"/images/help.png"}
                  alt="projects"
                />
                <span>Projects</span>
              </MenuListItem>
              <MenuListItem
                as="a"
                // TODO: contribute open source for the elegant way to allow a tag props to be passed
                // @ts-ignore
                href="#social"
              >
                <Image
                  width={34}
                  height={34}
                  src={"/images/help.png"}
                  alt="social_media"
                />
                <span>Social Media</span>
              </MenuListItem>
            </MenuList>
          )}
          <Clock />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Menu
