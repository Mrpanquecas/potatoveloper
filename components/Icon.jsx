import Image from "next/image"
import React from "react"

const Icon = ({ className, onClick, icon, description, alt }) => {
  return (
    <div className={className} onClick={onClick}>
      <Image width={34} height={34} src={icon} alt={alt} />
      <span>{description}</span>
    </div>
  )
}

export default Icon
