import React from 'react'
import '../styles/HomeScreen.css'
import newceo from '../../utils/assets/newCEO.jpg'

const HomeScreen = () => {

  return (
    <>
      <img class="newCeo" src={newceo}/>
      <span class="expertText" >EXPERT IN</span>
      <span class="shakeText expertText" >CUTTING&nbsp;EDGE</span>
      <span class="expertText" >TECHNOLOGIES</span>
      <span class="expertText" >↓</span>
    </>
    )
}

export default HomeScreen
