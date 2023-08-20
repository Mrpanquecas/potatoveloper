import Image from "next/image"
import React from "react"
import { Window, WindowContent, WindowHeader } from "react95"

const ErrorWindow = ({ title, error }) => {
  return (
    <Window className="w-80 -mt-10" shadow={false}>
      <WindowHeader className="flex items-center justify-between">
        <span>{title}</span>
      </WindowHeader>
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

export default ErrorWindow
