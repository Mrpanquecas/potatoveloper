import Image from "next/image"
import React from "react"
import { Window, WindowContent, WindowHeader, Button, Toolbar } from "react95"
import useFunnyCases from "../../hooks/useFunnyCases"

const CustomWindow = ({ title, error }) => {
  const [open, setOpen] = React.useState(true)
  const { isImpossibleDeveloper } = useFunnyCases()

  const toggleFolder = () => {
    setOpen(!open)
  }
  if (!open) return null

  return (
    <Window className="w-80" shadow={false}>
      <WindowHeader className="flex items-center justify-between">
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
      <WindowContent className="flex flex-col text-center justify-between">
        <div className="flex">
          <div className="w-10 h-10 flex items-center">
            <Image src="/images/error.png" width={32} height={32} alt="error" />
          </div>
          <span className="pl-4 text-left">{error}</span>
        </div>
      </WindowContent>
    </Window>
  )
}

export default CustomWindow
