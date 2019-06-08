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

  const [checked, setDeveloperSkill] = React.useState([false, false, false]);
  
  const toggleDeveloperSkill = (skill, i) => {
    console.log(checked)
    let checkedList = checked
    checkedList.splice(i, 1, !checked[i])
    if(checkedList.filter(checked => checked === true).length === 3) {
      checkedList.splice(checked[i-1], 1, true)
      let rand = Math.floor(Math.random() * checkedList.length)
      while(rand === i) {
        rand = Math.floor(Math.random() * checkedList.length)
      }
      console.log(i,rand,checkedList)
      checkedList.splice(checked[rand-1], 1, false)
      console.log(i,rand,checkedList)
      return setDeveloperSkill([...checkedList])
    }
    return setDeveloperSkill([...checkedList])
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
          {fields.map((field, i) => (
            <>
              <Checkbox onChange={e => toggleDeveloperSkill(e, i)} checked={checked[i] === true} style={{width:'50%'}} value={field.name} label={field.label} name={field.name} />
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
