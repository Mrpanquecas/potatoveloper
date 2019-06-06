import React from 'react'
import { Window,WindowContent,WindowHeader,Button,Toolbar, Checkbox, Cutout, Fieldset  } from "react95";


const fields = [
  {
    value: 'fast',
    label: 'Fast ⏱',
    name: 'fast'
  },
  {
    value: 'good',
    label: 'Good 🌯',
    name: 'good'
  },
  {
    value: 'happy',
    label: 'Happy 🍕',
    name: 'happy'
  }
]

const CustomWindow = ({toggleFolder, title}) => {

  const [{skill, lastSkill}, setDeveloperSkill] = React.useState({skill: undefined, lastSkill: undefined});
  
  const toggleDeveloperSkill = (newSkill, newLastSkill) => {
    console.log(newSkill.target.value, newLastSkill)
    const skillValue = newSkill.target.value
    setDeveloperSkill({skill: skillValue, lastSkill: newLastSkill});
  }


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
          {fields.map(field => (
            <>
              <Checkbox onChange={e => toggleDeveloperSkill(e, skill)} checked={skill === field.name ? true : lastSkill === field.name ? true : false} style={{width:'50%'}} value={field.name} label={field.label} name={field.name} />
              <br/>
            </>
          ))}
        </Fieldset>
      </div>

      </WindowContent>
    </Window>
  )
}

export default CustomWindow
