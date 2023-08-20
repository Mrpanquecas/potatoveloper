import React, { useState } from "react"
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Checkbox,
  GroupBox
} from "react95"
import Icon from "../components/Icon"
import useFunnyCases from "../hooks/useFunnyCases"
import { getRandomSkill } from "../utils/getRandomSkill"

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

const TraitsWindow = ({ title }) => {
  const [open, setOpen] = useState(true)
  const [developerSkillChecked, setDeveloperSkillChecked] = useState([
    { fast: false },
    { good: false },
    { cheap: false }
  ])

  const { setImpossibleDeveloper } = useFunnyCases()

  const toggleDeveloperSkill2 = (e) => {
    // Copy of state array
    let arraySkills = [...developerSkillChecked]
    const { checked, name } = e.target

    // Find skill to be edited
    const editSkill = arraySkills.findIndex((skill) =>
      skill.hasOwnProperty(name)
    )
    arraySkills[editSkill][name] = checked

    // Check if there are 3 checked checkboxes
    if (
      arraySkills.filter((skill) => skill[Object.keys(skill)[0]] === true)
        .length === 3
    ) {
      // get a random one different than the current and change it's value
      const randomSkill = getRandomSkill(arraySkills, name)
      const skillToRemove = arraySkills.findIndex((skill) =>
        skill.hasOwnProperty(randomSkill)
      )
      arraySkills[skillToRemove][randomSkill] = false
      // Get a random one and replace it in the array
      setImpossibleDeveloper(true)
    } else {
      setImpossibleDeveloper(false)
    }
    setDeveloperSkillChecked(arraySkills)
  }

  const toggleFolder = () => {
    setOpen(!open)
  }

  if (!open)
    return (
      <Icon
        description={title}
        onClick={toggleFolder}
        icon={"/images/folder.png"}
        className="flex flex-col items-center"
        alt="folder"
      />
    )

  return (
    <Window className="w-80 z-10" shadow={false}>
      <WindowHeader className="flex items-center justify-between">
        <span>{title}</span>
        <Button onClick={toggleFolder} size={"sm"} square>
          <span className="font-bold transform -translate-y-0.5">x</span>
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
      <WindowContent className="flex flex-col text-center justify-center">
        <div style={{ maxWidth: "250px" }}>
          <GroupBox label="Choose developer traits">
            {fields.map((field) => (
              <div key={field.name}>
                <Checkbox
                  onChange={(e) => toggleDeveloperSkill2(e)}
                  checked={!!developerSkillChecked.find((el) => el[field.name])}
                  className="w-1/2"
                  value={field.name}
                  label={field.label}
                  name={field.name}
                />
                <br />
              </div>
            ))}
          </GroupBox>
        </div>
      </WindowContent>
    </Window>
  )
}

export default TraitsWindow
