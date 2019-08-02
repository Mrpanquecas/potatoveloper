import React from 'react'
import { Window,WindowContent,WindowHeader,Button,Toolbar, Progress, Cutout, Fieldset  } from "react95"
import Icon from '../../commonComponents/Icon'
import bribescore from '../../utils/assets/bribescore.png'
import logo_opsify from '../../utils/assets/logo_opsify.png'
import altice from '../../utils/assets/altice.png'
import '../styles/HomeScreen.css'
import ProgressBar from '../../commonComponents/ProgressBar'
import folder from '../../utils/assets/folder.png'

const projects = [
  {
    title: 'title: OPSIFY (managment software)',
    description: 'description: Antd, React, PWA',
    percent: 20,
    projectImg: logo_opsify
  },
  {
    title: 'title: Crypto currency game',
    description: 'description: React Material UI',
    percent: 40,
    projectImg: bribescore
  },
  {
    title: 'title: Retake simulator',
    description: 'description: Antd, React',
    percent: 60,
    projectImg: altice
  }
]

const iconStyles =  {
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
}

const CustomWindow = ({title}) => {
    
  const [open, setOpen] = React.useState(true)
  const [position, goNextOrPrev] = React.useState(0)

  const changeProject = nextOrPrev => {
    console.log(position, nextOrPrev)
    goNextOrPrev(nextOrPrev)
  }

  const toggleFolder = () => {
    setOpen(!open)
  }

  return (
    <>
      {open ? (
        <Window 
          style={{width: '50vw'}}
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
          <Button variant="menu" size="sm">
              File
          </Button>
          <Button variant="menu" size="sm">
              Edit
          </Button>
          <Button variant="menu" size="sm" disabled>
              Save
          </Button>
          </Toolbar>
          <WindowContent         style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
          <div style={{ maxWidth: '50vw' }}>
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
        <Icon description="projects.exe" onClick={toggleFolder} icon={folder} styles={iconStyles}/>
      )}
    </>
  )
}

export default CustomWindow
