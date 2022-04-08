import Image from "next/image"
import React from "react"
import { List, ListItem, Divider, Button, Toolbar, AppBar, Progress } from "react95"

const Menu = ({pageProgress}) => {
  const [open, setOpen] = React.useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <AppBar className="z-10" fixed={true}>
      <Toolbar className="justify-between">
        <div className="relative inline-block">
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
                <Image width={34} height={34} src={"/images/trashbin.png"} />{" "}
                About
              </ListItem>
              <ListItem href="#slide2">
                <Image width={34} height={34} src={"/images/help.png"} />
                Trash
              </ListItem>
              <Divider />
              <ListItem href="#slide3">
                <Image width={34} height={34} src={"/images/help.png"} />
                Projects
              </ListItem>
              <ListItem href="#slide4">
                <Image width={34} height={34} src={"/images/help.png"} />
                Social Media
              </ListItem>
            </List>
          )}
          
        </div>
        <Progress value={pageProgress} />
      </Toolbar>
    </AppBar>
  )
}

export default Menu
