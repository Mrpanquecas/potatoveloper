import Image from "next/image"
import React from "react"

const SocialLink = ({ src, url, name }) => {
  return (
    <div className="flex items-center">
      <Image width={34} height={34} src={src} alt="name" />
      <a
        className="text-black"
        target="_blank"
        rel="noopener noreferrer"
        href={url}
      >
        {name}
      </a>
    </div>
  )
}

export default SocialLink
