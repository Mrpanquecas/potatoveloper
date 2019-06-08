import React from 'react'
import '../styles/HomeScreen.css'
import newceo from '../../utils/assets/newCEO.jpg'

const HomeScreen = () => {
  
  const [open, setOpen] = React.useState(true);
  
 const toggleFolder = () => {
    setOpen(!open);
  }

const styles =  {
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
}

  return (
    <>
{/*                     <div
        style={styles} 
        onClick={toggleFolder}
    >
        <img style={{width:'auto'}} src={folder}/>
        <span>portfolio</span>
    </div> */}
    <img class="newCeo" src={newceo}/>
    <span class="expertText" >EXPERT IN</span>
    <span class="shakeText expertText" >CUTTING&nbsp;EDGE</span>
    <span class="expertText" >TECHNOLOGIES</span>
    <span class="expertText" >↓</span>
    </>
    )
}

export default HomeScreen
