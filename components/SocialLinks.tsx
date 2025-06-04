import Image from "next/image"
import React from "react"
import { Anchor } from "react95"

const SocialLink = ({ src, url, name }) => {
  return (
    <div className="flex items-center my-2">
      <Image width={24} height={24} src={src} alt="name" />
      <Anchor
        className="text-black ml-2"
        target="_blank"
        rel="noopener noreferrer"
        href={url}
      >
        {name}
      </Anchor>
    </div>
  )
}

export default SocialLink
