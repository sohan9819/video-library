import React from 'react'
import {
  Container,
  Image,
  Details,
  ChannelImage,
  Texts,
  Title,
  ChannelName,
  Info,
} from './Card.styles'
import { VideoType } from '../../utils/Video'
import { Link } from 'react-router-dom'

type CardProps = {
  type?: string
  key?: string
  video: VideoType
}

export const Card = ({ type }: CardProps) => {
  return (
    <Link to={'/video/test'}>
      <Container typeof={type}>
        <Image
          typeof={type}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZNy72t2nzCvuU44-H7Boi6k1fcYTAZBWfhA&usqp=CAU"
        />
        <Details typeof={type}>
          <ChannelImage
            typeof={type}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaRd7ymrF9STpUDnhrPLQV318Jdlie0haWnw&usqp=CAU"
          />
          <Texts>
            <Title>Test Videos</Title>
            <ChannelName>AnimeTube</ChannelName>
            <Info>660,908 views • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}
