import React from "react"
import Image from "next/image"

const HomeScreen = () => {
  return (
    <>
      <div className="newCEO">
        <Image width={350} height={300} src={"/images/newCEO.jpg"} />
      </div>
      <span className="expertText">EXPERT IN</span>
      <span className="shakeText expertText">CUTTING&nbsp;EDGE</span>
      <span className="expertText">TECHNOLOGIES</span>
      <span className="expertText">↓</span>
    </>
  )
}

export default HomeScreen
