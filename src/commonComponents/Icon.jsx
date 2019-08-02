import React from 'react'


const Icon = ({styles, onClick, icon, description}) => {
  return (
    <div
      style={styles} 
      onClick={onClick}
    >
        <img style={{width:'auto'}} src={icon}/>
        <span>{description}</span>
    </div> 
  )
}

export default Icon