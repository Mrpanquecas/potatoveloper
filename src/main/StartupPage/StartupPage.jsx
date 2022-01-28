import React from 'react'
//import newceo from 'images/newCEO.jpg'
import Image from 'next/image'

const HomeScreen = () => {

  return (
    <>
      <div className='newCEO'>
        <Image layout="fill" src={"/images/newCEO.jpg"}/>
      </div>
      <span class="expertText" >EXPERT IN</span>
      <span class="shakeText expertText" >CUTTING&nbsp;EDGE</span>
      <span class="expertText" >TECHNOLOGIES</span>
      <span class="expertText" >↓</span>
    </>
    )
}

export default HomeScreen
