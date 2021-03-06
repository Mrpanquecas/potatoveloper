import React from 'react'
import { Window,WindowContent,WindowHeader,Button,Toolbar, List, ListItem, Cutout  } from "react95"
import Icon from '../../commonComponents/Icon'
import bribescore from '../../utils/assets/bribescore.png'
import logo_opsify from '../../utils/assets/logo_opsify.png'
import altice from '../../utils/assets/altice.png'
import '../styles/HomeScreen.css'
import ProgressBar from '../../commonComponents/ProgressBar'
import folder from '../../utils/assets/folder.png'
import help from '../../utils/assets/help.png'

const projects = [
  {
    title: 'title: OPSIFY (managment software)',
    description: 'description: Antd, React, PWA',
    percent: 20,
    scope: 'custom tailored solution',
    projectImg: logo_opsify
  },
  {
    title: 'title: Crypto currency game',
    description: 'description: React Material UI',
    percent: 40,
    scope: 'fun side project for crypto',
    projectImg: bribescore
  },
  {
    title: 'title: Retake simulator',
    description: 'description: Antd, React',
    percent: 60,
    scope: 'custom tailored solution',
    projectImg: altice
  }
]

const iconStyles =  {
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
}

const listItemStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start'
}

const CustomWindow = ({title}) => {
    
  const [open, setOpen] = React.useState(true)
  const [position, goNextOrPrev] = React.useState(0)
  const [openMenu, setOpenMenu] = React.useState(false);

  const changeProject = nextOrPrev => {
    console.log(position, nextOrPrev)
    goNextOrPrev(nextOrPrev)
  }

  const toggleFolder = () => {
    setOpen(!open)
  }

    
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      {open ? (
        <Window 
          className="projectswindow"
          shadow={false}
        >
          <WindowHeader
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
          <span>{title}</span>
          <Button onClick={toggleFolder} style={{ marginRight: '-6px', marginTop: '1px' }} size={'sm'} square>
            <span style={{ fontWeight: 'bold', transform: 'translateY(-1px)' }}>x</span>
          </Button>
          </WindowHeader>
          <Toolbar>
          <Button variant="menu" size="sm" onClick={toggleMenu}>
              File
          </Button>
          {openMenu && (
            <List style={{zIndex: 2}} horizontalAlign="left" verticalAlign="bottom">
              <ListItem style={listItemStyle} as="a" target="_top" href="mailto:ricardo.simoescosta@hotmail.com"><img style={{marginRight:8}} src={help}/> Request More Info</ListItem>
            </List>
          )}
          <Button variant="menu" size="sm">
              Edit
          </Button>
          <Button variant="menu" size="sm" disabled>
              Save
          </Button>
          </Toolbar>
          <WindowContent
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
          <div style={{ maxWidth: '90%' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <Cutout  style={{marginBottom: 8}}>
                  <img class="project" src={projects[position].projectImg}/>
                </Cutout>
                <Cutout  style={{marginBottom: 8, background: 'white', width: '100%'}}>
                  <p class="msFont">{projects[position].title}</p>
                  <p class="msFont">{projects[position].description}</p>
                  <p class="msFont">{projects[position].scope}</p>
                </Cutout>
                <ProgressBar percent={projects[position].percent}/>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    width: '100%'
                  }}
                >
                  <Button disabled={position === 0} onClick={() => changeProject(position-1)} style={{marginTop:8, marginRight: 4}}>
                    Previous
                  </Button>
                  <Button disabled={position === projects.length-1} onClick={() => changeProject(position+1)} style={{marginTop:8, marginLeft: 4}}>
                    Next
                  </Button>
                </div>
              </div>
          </div>

          </WindowContent>
        </Window>
      ) : (
        <Icon description={title} onClick={toggleFolder} icon={folder} styles={iconStyles}/>
      )}
    </>
  )
}

export default CustomWindow
