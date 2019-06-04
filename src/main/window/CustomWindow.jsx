import React from 'react'
import { Window,WindowContent,WindowHeader,Button,Toolbar  } from "react95";


const CustomWindow = ({toggleFolder}) => {

  return (
    <Window style={{
      position: 'absolute'
      }}
      shadow={false}
    >
      <WindowHeader
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      >
      <span>react95.exe</span>
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
      <WindowContent>
      <ul>
        <li>Projecto 1</li>
        <li>Projecto 2</li>
        <li>Projecto 3</li>
        <li>Projecto 4</li>
      </ul>
      </WindowContent>
    </Window>
  )
}

export default CustomWindow
