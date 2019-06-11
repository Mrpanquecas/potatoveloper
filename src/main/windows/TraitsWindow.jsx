import React from 'react'
import { Window,WindowContent,WindowHeader,Button,Toolbar, Checkbox, Fieldset  } from "react95";

const fields = [
  {
    value: 'fast',
    label: 'Fast ⏱',
    name: 'fast'
  },
  {
    value: 'good',
    label: 'Good 🥇',
    name: 'good'
  },
  {
    value: 'cheap',
    label: 'Cheap 💰',
    name: 'cheap'
  }
]

const CustomWindow = ({toggleFolder, title}) => {

  const [checked, setDeveloperSkill] = React.useState([false, false, false]);
  const [checked2, setDeveloperSkill2] = React.useState([]);

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
      checkedList.splice(checked[rand], 1, false)
      return setDeveloperSkill([...checkedList])
    }
    return setDeveloperSkill([...checkedList])
  }

    
  const toggleDeveloperSkill2 = (skill, i, name) => {
    console.log(checked2, skill.target.checked, i, name)
    let checkedList = checked2
    if(skill.target.checked && checked2.length === 2) {
      console.log('yada')
      if(name === 'fast') {
        console.log('yada')
        return setDeveloperSkill2(['fast', 'good'])
      }
      if(name === 'good') {
        console.log('yada')
        return setDeveloperSkill2(['good', 'cheap'])
      }
      if(name === 'cheap') {
        console.log('yada')
        return setDeveloperSkill2(['cheap', 'fast'])
      }
    }
    if(skill.target.checked) {
      console.log(checkedList)
      return setDeveloperSkill2([...checkedList, name])
    }else{
      checkedList = checked2.filter(obj => obj !== name)
      console.log(checkedList)
      return setDeveloperSkill2([...checkedList])
    }
    
    // checkedList.splice(i, 1)
    // if(checkedList.filter(chckd => chckd === true).length === 3) {
    //   checkedList.splice(checked2[i-1], 1, true)
    //   let rand = Math.floor(Math.random() * checkedList.length)
    //   while(rand === i) {
    //     rand = Math.floor(Math.random() * checkedList.length)
    //   }
    //   checkedList.splice(checked2[rand], 1, false)
    //   console.log(checkedList)
    //   return setDeveloperSkill2([...checkedList, {name}])
    // }
    console.log(checkedList)
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
        <Fieldset label="Choose developer traits">
          {fields.map((field, i) => (
            <>
              <Checkbox onChange={e => toggleDeveloperSkill2(e, i, field.name)} checked={checked2.find(el => el === field.name) ? true : false} style={{width:'50%'}} value={field.name} label={field.label} name={field.name} />
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
