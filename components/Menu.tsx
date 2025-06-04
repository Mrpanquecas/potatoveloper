import React, { useState } from "react"
import { Button, Toolbar, AppBar, TextInput } from "react95"
import Clock from "./Clock"
import { useClippy } from "@react95/clippy"

const Menu = () => {
  const { clippy } = useClippy()
  const [search, setSearch] = useState("")

  const handleSearch = () => {
    window.open(`https://letmegooglethat.com/?q=${search}`, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <AppBar className="z-10">
      <Toolbar className="w-full">
        <div className="relative flex items-center w-full justify-between pr-2">
          <div className="flex gap-2">
            <TextInput
              onChange={handleChange}
              onFocus={() => {
                clippy?.speak(
                  "Type something, I gonna help you figure it out with my top-notch-AI-powered search engine",
                  true
                )
              }}
              placeholder="Type something..."
              width={150}
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>
          <Clock />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Menu
