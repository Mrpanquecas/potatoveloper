import React from 'react'
import styled from 'styled-components'

const LinkWrapper = styled.div`
display: flex;
align-items: center;
`;

const Image = styled.img `
width: 32px;
margin: 8px;
`

const Link = styled.a `
  color: #0000EE;
  &:visited {
    color: #551A8B;
  }
`


const SocialLink = ({src, url, name}) => {
  return (
    <LinkWrapper>
      <Image src={src}/>
      <Link target="_blank" rel="noopener noreferrer" href={url}>{name}</Link>
    </LinkWrapper>
  )
}

export default SocialLink