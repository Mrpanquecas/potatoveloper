import React from 'react'
import './styles/HomeScreen.css'
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes } from "react95";
import Menu from '../commonComponents/Menu'
import { Grid, GridItem } from 'styled-grid-component';
import folder from '../utils/assets/folder.png'
import Window from './window/CustomWindow'

const ResetStyles = createGlobalStyle`
  ${reset}
`

const HomeScreen = () => {
  
  const [open, setOpen] = React.useState(false);
  
 const toggleFolder = () => {
    setOpen(!open);
  }



  return (
    <div className="HomeScreen">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <>
          <Grid
            width="100%"
            height="100vh"
            templateColumns="repeat(3, 1fr)"
            gap="10px"
            autoRows="minmax(100px, auto)"
          >
            <GridItem column="1" row="5">
              <div onClick={toggleFolder} className="gridFlexCol">
                <img style={{width:'auto'}} src={folder}/>
                <span>portfolio</span>
              </div>
            </GridItem>
            <GridItem column="1 / 5" row="3">              
              {open && (
                <Window toggleFolder={toggleFolder}/>
              )}
              <Menu/>
            </GridItem>

          </Grid>
        </>
      </ThemeProvider>
    </div>
  )
}

export default HomeScreen
