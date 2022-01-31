import React from "react"
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Checkbox,
  Fieldset
} from "react95"
import Icon from "../../commonComponents/Icon"
//import folder from '/public/utils/assets/folder.png'

const fields = [
  {
    value: "fast",
    label: "Fast ⏱",
    name: "fast"
  },
  {
    value: "good",
    label: "Good 🥇",
    name: "good"
  },
  {
    value: "cheap",
    label: "Cheap 💰",
    name: "cheap"
  }
]

const iconStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}

const getRandomSkill = (skills, name) => {
  let deleteRandomSkill = name
  while (deleteRandomSkill === name) {
    let seed = Math.floor(Math.random() * skills.length)
    let randomName = Object.keys(skills[seed])[0]
    if (name !== randomName) return randomName
  }
}

const CustomWindow = ({ title }) => {
  const [checked2, setDeveloperSkill2] = React.useState([
    { fast: false },
    { good: false },
    { cheap: false }
  ])

  const toggleDeveloperSkill2 = e => {
    // Copy of state array
    let arraySkills = [...checked2]
    const { checked, name } = e.target

    // Find skill to be edited
    const editSkill = arraySkills.findIndex(skill => skill.hasOwnProperty(name))
    arraySkills[editSkill][name] = checked

    // Check if there are 3 checked checkboxes
    if (
      arraySkills.filter(skill => skill[Object.keys(skill)[0]] === true)
        .length === 3
    ) {
      // get a random one different than the current and change it's value
      const randomSkill = getRandomSkill(arraySkills, name)
      const skillToRemove = arraySkills.findIndex(skill =>
        skill.hasOwnProperty(randomSkill)
      )
      arraySkills[skillToRemove][randomSkill] = false
      // Get a random one and replace it in the array
    }
    setDeveloperSkill2(arraySkills)
  }

  const [open, setOpen] = React.useState(true)

  const toggleFolder = () => {
    setOpen(!open)
  }

  if (!open)
    return (
      <Icon
        description={title}
        onClick={toggleFolder}
        icon={"/images/folder.png"}
        styles={iconStyles}
      />
    )

  return (
    <Window
      style={{
        width: "80%",
        maxWidth: 290
      }}
      shadow={false}
    >
      <WindowHeader
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <span>{title}</span>
        <Button onClick={toggleFolder} size={"sm"} square>
          <span style={{ fontWeight: "bold", transform: "translateY(-1px)" }}>
            x
          </span>
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
      <WindowContent
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center"
        }}
      >
        <div style={{ maxWidth: "250px" }}>
          <Fieldset label="Choose developer traits">
            {fields.map(field => (
              <>
                <Checkbox
                  onChange={e => toggleDeveloperSkill2(e)}
                  checked={!!checked2.find(el => el[field.name])}
                  style={{ width: "50%" }}
                  value={field.name}
                  label={field.label}
                  name={field.name}
                />
                <br />
              </>
            ))}
          </Fieldset>
        </div>
      </WindowContent>
    </Window>
  )
}

export default CustomWindow
