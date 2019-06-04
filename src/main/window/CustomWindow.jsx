import React from 'react'
import { Window,WindowContent,WindowHeader,Button,Toolbar, Checkbox, Cutout, Fieldset  } from "react95";


const CustomWindow = ({toggleFolder, title}) => {

  return (
    <Window style={{
      width: '80%',
      maxWidth: 290
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
        <Fieldset label="Choose developer type">
          <Checkbox value="fast" label="Fast ⏱" name="fast" />
          <br />
          <Checkbox  value="good" label="Good 🌯" name="good" />
          <br />
          <Checkbox value="happy" label="Happy 🍕" name="happy" />
        </Fieldset>
      </div>

      </WindowContent>
    </Window>
  )
}

export default CustomWindow
