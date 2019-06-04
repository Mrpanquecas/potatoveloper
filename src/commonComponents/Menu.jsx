import React from 'react'
import { List, ListItem, Divider, Button, Toolbar } from "react95";
import AppBar from '../commonComponents/AppBar'




function Menu() {
  
    const [open, setOpen] = React.useState(false);
    
    const toggleMenu = () => {
        setOpen(!open);
      }
    
     const closeMenu = () => {
        setOpen(false);
      }
    
      
  
    return (
        <AppBar fixed={false} className="AppBar">
        <Toolbar style={{ justifyContent: 'space-between' }}>
        <Button onClick={toggleMenu} active={open}>Start</Button>
        {open && (
            <List horizontalAlign="left" verticalAlign="top">
                <ListItem>👨‍💻 Sing</ListItem>
                <ListItem>💃🏻 Danceeeeeeee</ListItem>
                <Divider />
                <ListItem disabled>😴 Sleep</ListItem>
            </List>
        )}
        </Toolbar>
        </AppBar>
    )
  }
  
  export default Menu
  
