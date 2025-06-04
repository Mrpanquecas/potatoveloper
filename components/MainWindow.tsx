import React from "react"
import { Window, WindowHeader, WindowContent, Button } from "react95"
import styled from "styled-components"
import Image from "next/image"

const IconLabel = styled.span`
  margin-top: 5px;
  font-size: 12px;
  color: black;
`

type MainWindowProps = {
  onOpenWindow: (windowName: string) => void
  onClose: () => void
}

const MainWindow = ({ onOpenWindow, onClose }: MainWindowProps) => {
  const desktopIcons = [
    {
      name: "Projects",
      icon: "/images/folder.png",
      action: "projects"
    },
    {
      name: "Social Media",
      icon: "/images/search.png",
      action: "social"
    }
  ]

  return (
    <Window className="w-full mx-2 sm:w-96 sm:mx-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <WindowHeader className="window-title">
        <span>my_computer.exe</span>
        <Button
          onClick={onClose}
          size={"sm"}
          className="absolute right-2 top-2"
        >
          <span className="font-bold transform -translate-y-0.5">x</span>
        </Button>
      </WindowHeader>
      <WindowContent>
        <div className="flex justify-center items-center gap-4">
          {desktopIcons.map((item) => (
            <div
              className="flex flex-col p-2 items-center justify-center cursor-pointer hover:bg-stone-950 hover:bg-opacity-10"
              key={item.name}
              onClick={() => onOpenWindow(item.action)}
            >
              <Image src={item.icon} alt={item.name} width={48} height={48} />
              <IconLabel>{item.name}</IconLabel>
            </div>
          ))}
        </div>
      </WindowContent>
    </Window>
  )
}

export default MainWindow
