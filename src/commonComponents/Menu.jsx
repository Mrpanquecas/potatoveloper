import React from 'react'
import { List, ListItem, Divider, Button, Toolbar, Icon } from "react95";
import AppBar from '../commonComponents/AppBar'
//import trashbin from 'images/trashbin.png'
//import help from 'images/help.png'


const listItemStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start'
}

function Menu() {
  
    const [open, setOpen] = React.useState(false);
    
    const toggleMenu = () => {
      setOpen(!open);
    }
    
     const closeMenu = () => {
      setOpen(false);
    }
    
      
  
    return (
        <AppBar fixed={true} className="AppBar">
        <Toolbar style={{ justifyContent: 'space-between' }}>
        <Button onClick={toggleMenu} active={open}>
          Start
        </Button>
        {open && (
            <List horizontalAlign="left" verticalAlign="top">
                <ListItem style={listItemStyle} as="a" href="#slide1"><img style={{marginRight:8}} src={"/images/trashbin.png"}/> About</ListItem>
                <ListItem style={listItemStyle} as="a" href="#slide2"><img style={{marginRight:8}} src={"/images/help.png"}/>Trash</ListItem>
                <Divider />
                <ListItem style={listItemStyle} as="a" href="#slide3"><img style={{marginRight:8}} src={"/images/help.png"}/>Projects</ListItem>
                <ListItem style={listItemStyle} as="a" href="#slide4"><img style={{marginRight:8}} src={"/images/help.png"}/>Social Media</ListItem>
            </List>
        )}
       🚧 Project made to test React hooks API and react 95. under construction 🚧
        </Toolbar>
        </AppBar>
    )
  }
  
  export default Menu
  
