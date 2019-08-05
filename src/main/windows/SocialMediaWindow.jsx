import React from 'react'
import { Window,WindowContent,WindowHeader,Button,Toolbar, Progress, Cutout, Fieldset  } from "react95"
import Icon from '../../commonComponents/Icon'
import bribescore from '../../utils/assets/bribescore.png'
import logo_opsify from '../../utils/assets/logo_opsify.png'
import altice from '../../utils/assets/altice.png'
import git from '../../utils/assets/git.svg'
import linkedin from '../../utils/assets/linkedin.svg'
import stackoverflow from '../../utils/assets/stackoverflow.svg'

import '../styles/HomeScreen.css'
import ProgressBar from '../../commonComponents/ProgressBar'
import folder from '../../utils/assets/folder.png'
import SocialLink from '../../commonComponents/SocialLinks';

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

const SocialMediaWindow = ({title}) => {
    
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
          <div style={{ width: '90%' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <Cutout  style={{padding: 8, background: 'white', width: '100%'}}>
                  <p class="msFont"></p>
                  <Fieldset variant="flat" label="Find me in my social media:">
                    <SocialLink src={git} name="Github" url="https://github.com/Mrpanquecas" />
                    <SocialLink src={linkedin} name="Linkedin" url="https://www.linkedin.com/in/costar" />
                    <SocialLink src={stackoverflow} name="Stack Overflow" url="https://stackoverflow.com/users/8233144/ricardo-costa" />
                  </Fieldset>
                </Cutout>
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

export default SocialMediaWindow
