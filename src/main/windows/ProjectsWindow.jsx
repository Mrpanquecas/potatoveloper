import React from 'react'
import { Window,WindowContent,WindowHeader,Button,Toolbar, Progress, Cutout, Fieldset  } from "react95";
import Icon from '../../commonComponents/Icon'
import bribescore from '../../utils/assets/bribescore.png'
import '../styles/HomeScreen.css'
import ProgressBar from '../../commonComponents/ProgressBar';
import folder from '../../utils/assets/folder.png'

const projects = [
  {
    name: '',
    description: ''
  }
]

const iconStyles =  {
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
}

const CustomWindow = ({title}) => {
    
  const [open, setOpen] = React.useState(true);
    
  const toggleFolder = () => {
    setOpen(!open);
  }

  return (
    <>
      {open ? (
        <Window 
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
            }}>
          <div style={{ maxWidth: '250px' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>

                <Cutout  style={{marginBottom: 8}}>
                <img class="project" src={bribescore}/>
                </Cutout>
                <Cutout  style={{marginBottom: 8, background: 'white', width: '100%'}}>
                  <p class="msFont">title: Crypto currency game</p>
                  <p class="msFont">description: React; Material UI</p>
                </Cutout>
                <ProgressBar width="100" percent={50}/>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    width: '100%'
                  }}
                >
                  <Button style={{marginTop:8, marginRight: 4}}>
                    Previous
                  </Button>
                  <Button style={{marginTop:8, marginLeft: 4}}>
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
