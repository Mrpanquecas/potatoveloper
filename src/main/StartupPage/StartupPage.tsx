import React from "react"
import Image from "next/image"
import { Desktop } from "react95"

const HomeScreen = () => {
  return (
    <>
      <div data-testid="ceo" className="newCEO">
        <Desktop backgroundStyles={{ background: "blue" }}>
          <Image width={155} height={115} src={"/images/newCEO.jpg"} alt="CEO" />
        </Desktop>
      </div>
      <span className="expertText">EXPERT IN</span>
      <span className="shakeText expertText">CUTTING&nbsp;EDGE</span>
      <span className="expertText">TECHNOLOGIES</span>
      <span className="expertText">↓</span>
    </>
  )
}

export default HomeScreen
