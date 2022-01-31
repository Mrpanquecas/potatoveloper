import Image from 'next/image'
import React from 'react'


const Icon = ({styles, onClick, icon, description}) => {
  return (
    <div
      style={styles} 
      onClick={onClick}
    >
        <Image width={34} height={34} src={icon}/>
        <span>{description}</span>
    </div> 
  )
}

export default Icon