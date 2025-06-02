import React, { useEffect } from "react"
import Menu from "../components/Menu"
import { useRouter } from "next/navigation"
import { Monitor } from "react95"
import Image from "next/image"
import { useClippy } from "@react95/clippy"
import { Button } from "react95"

const HomeScreen = () => {
  const { clippy } = useClippy()
  const navigate = useRouter()

  useEffect(() => {
    console.log(clippy)
    if (!clippy) return

    clippy.animate()
    clippy.speak(
      "Hey! Remember me? I'm here to increase this website's bundle size!",
      false
    )
    console.log(clippy.animations())
  }, [clippy])

  return (
    <>
      <div className="backgroundVintage h-full relative bg-cyan-700">
        <div className="section h-full">
          <div className="flex flex-col items-center justify-center">
            <div
              data-testid="ceo"
              className="newCEO mt-20"
              onClick={() => {
                console.log("clicked")
                clippy?.stop()
                clippy?.speak(
                  "Hey! Remember me? I'm here to increase this website's bundle size!",
                  false
                )
              }}
            >
              <Monitor backgroundStyles={{ background: "blue" }}>
                <Image layout="fill" src={"/images/newCEO.jpg"} alt="CEO" />
              </Monitor>
            </div>
            <span className="expertText">EXPERT IN</span>
            <span className="shakeText expertText">CUTTING&nbsp;EDGE</span>
            <span className="expertText">TECHNOLOGIES</span>
            <span className="expertText">↓</span>
            <Button
              className="mt-5"
              size="lg"
              onClick={() => {
                navigate.push("/projects")
              }}
            >
              Checkout my projects
            </Button>
          </div>
        </div>
        <div>
          <Menu />
        </div>
      </div>
    </>
  )
}

export default HomeScreen
