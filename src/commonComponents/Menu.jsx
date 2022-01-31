import Image from "next/image"
import React from "react"
import { List, ListItem, Divider, Button, Toolbar, AppBar } from "react95"

const Menu = () => {
  const [open, setOpen] = React.useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <AppBar fixed={true}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button onClick={toggleMenu} active={open}>
            Start
          </Button>
          {open && (
            <List
              style={{
                position: "absolute",
                left: "0",
                top: "100%"
              }}
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
          🚧 Project made to test React hooks API and react 95. under
          construction 🚧
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Menu
