import React from 'react'
import './styles/HomeScreen.css'
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, List, ListItem, Divider, Button, Toolbar } from "react95";
import AppBar from './App'
const ResetStyles = createGlobalStyle`
  ${reset}
`;

function HomeScreen() {
  
  const [open, setOpen] = React.useState(false);
  
  function toggleMenu() {
    setOpen(!open);
  }

  function closeMenu() {
    setOpen(false);
  }


  return (
    <div className="HomeScreen">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
      <AppBar fixed={false} className="AppBar">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Button onClick={toggleMenu} active={open}>Start</Button>
          {open && (
            <List horizontalAlign="left" verticalAlign="top">
                <ListItem>🎤 Sing</ListItem>
                <ListItem>💃🏻 Dance</ListItem>
                <Divider />
                <ListItem disabled>😴 Sleep</ListItem>
            </List>
          )}
        </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  )
}

export default HomeScreen
